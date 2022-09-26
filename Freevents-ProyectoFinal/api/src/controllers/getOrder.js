const { Pack_services, Provider, Client, Order } = require('../db')
const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: "APP_USR-2751540276278194-092303-5231919cc7d44319e47e4774ac04ff2f-1202990518",
  });

//----> GET-ALL-ORDER
const getAllOrder = async (req, res) => {
    try {
        const allOrder = await Order.findAll({
            include: [
                {
                    model: Pack_services,
                    attributes: ['name', 'price'], 
                    // through: {
                    //     attributes: [],
                    // }
                },
                {
                    model: Provider,
                    attributes: ['name'], 
                    // through: {
                    //     attributes: [],
                    // }
                },
                {
                    model: Client,
                    attributes: ['name'], 
                    // through: {
                    //     attributes: [],
                    // }
                },
            ]
        });
        console.log(allOrder)
        res.status(200).json(allOrder)
    } 
    catch(error) { 
        console.log(error); 
        res.status(400).send('Bad request.')
    }
    
}; 

//----> GET-ORDER-BY-ID
const getOrderById = async (req, res) => {
    try { 
        const id = req.params.id
        const totalOrder = await Order.findOne({
            where: { id: id }, 
            include: [
                {
                    model: Pack_services,
                    attributes: ['name'], 
                    // through: {
                    //     attributes: [],
                    // }
                },
                {
                    model: Provider,
                    attributes: ['name'], 
                    // through: {
                    //     attributes: [],
                    // }
                },
                {
                    model: Client,
                    attributes: ['name'], 
                    // through: {
                    //     attributes: [],
                    // }
                },
            ]
        });
        res.status(200).json(totalOrder); 
    }
    catch(error) { 
        console.log(error);
        res.send(404).status('Not found.')
    }
        
}; 

//----> POST-ORDER
const postOrder = async (req, res) => {
    const { clientId, providerId, packServiceId, status, event_date, event_address } = req.body; 
    console.log("perritossssss", req.body)
    try {
        const orderCreate = await Order.create({
           status, 
           event_date, 
           event_address 
        });

        let clientDb = await Client.findOne({
            where : { id : clientId }
        });
        await orderCreate.setClient(clientDb.id);

        let providerDb = await Provider.findOne({
            where : { id : providerId }
        });
        await orderCreate.setProvider(providerDb.id); 

        let packServiceDb = await Pack_services.findOne({
            where : { id : packServiceId}
        }); 
        await orderCreate.setPack_service(packServiceDb.id); 

        res.status(201).json(orderCreate); 
    }
    catch (error) {
        console.log(error); 
        res.status(400).send('Bad request.'); 
    }; 
}; 

//----> DELETE-ORDER
const canceledOrder = async (req, res) => {
    try { 
        await Order.update(
            {status: "canceled"},
            {where : { id : req.params.id }},
        )
        res.status(200).send('Order canceled.')
    }
    catch(error) { 
        console.log('ERROR DE PATCH', error); 
        res.status(400).send('Bad request.'); 
    }; 
}; 


//----> POST-MERCADO PAGO.
const postMP = async (req, res) => {
    try {
    const id = req.params.id; 
    const orderMP = await Order.findOne({
        where : { id : id },
        include: {
            model: Pack_services, 
            attributes: ['price']
        }
    })

    let preference = {
        items: [
          {
            title: orderMP.name,
            unit_price: orderMP.pack_service.price,
            quantity: 1,
          },
        ],
        external_reference: `${orderMP.id}`,
        back_urls: {
            success: "https://freevents-backend-render.onrender.com/order/payment-confirm",
            failure: "https://freevents-backend-render.onrender.com/order/payment-confirm",
            pending: "https://freevents-backend-render.onrender.com/order/payment-confirm"
        },
        auto_return: "approved",
      };
      const response = await mercadopago.preferences.create(preference);
      const preferenceId = response.body.id; 

      res.send({ preferenceId });
    }
    catch(error) {
        res.status(404).send(error);
    }
};

const patchOrder = async (req, res) => {
    const external_reference = req.query.external_reference; 
    try {
        await Order.update(
            { status : "fulfilled" },
            { where : { id: parseInt(external_reference) }},
        );
        res.redirect("") //AGREGAR COMPONENTE QUE CONTENGA EL PERFIL DEL CLIENTE.
    }
    catch(error) {
        res.status(400).send(error); 
    };
};


module.exports = {
    getAllOrder,
    getOrderById,
    postOrder,
    canceledOrder,
    postMP,
    patchOrder
};