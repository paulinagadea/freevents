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
        let clientDb = await Client.findOne({
            where : { id : clientId }
        });
        console.log("client", clientDb)
        let providerDb = await Provider.findOne({
            where : { id : providerId }
        });
        console.log("provider", providerDb)

        let packServiceDb = await Pack_services.findOne({
            where : { id : packServiceId}
        }); 
        console.log('pack service', packServiceDb)
        
        const orderCreate = await Order.create({
            status, 
            event_date, 
            event_address,
            price: packServiceDb.price
        });

        await orderCreate.setProvider(providerDb.id); 
        await orderCreate.setClient(clientDb.id);
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
    console.log('Here!');
    try {
    const { id } = req.body; 
    console.log({ id });
    const orderMP = await Order.findOne({
        where : { id : id },
        include: {
            model: Pack_services, 
            attributes: ['price']
        }
    })
    console.log({ orderMP });

    let preference = {
        items: [
          {
            title: orderMP.id,
            unit_price: orderMP.pack_service.price,
            quantity: 1,
          },
        ],
        external_reference: `${orderMP.id}`,
        back_urls: {
            success: "http://localhost:3001/order/payment-confirm",
            failure: "http://localhost:3001/order/payment-confirm",
            pending: "http://localhost:3001/order/payment-confirm"
        },
        auto_return: "approved",
      };
      const response = await mercadopago.preferences.create(preference);
      const preferenceId = response.body.id; 
      console.log('preference en back', preferenceId)

      res.send({ preferenceId });
    }
    catch(error) {
        res.status(404).send(error);
    }
};

//----> UPDATE-ORDER-POST-MP
const patchOrder = async (req, res) => {
    const external_reference = req.query.external_reference; 
    try {
        await Order.update(
            { status : "fulfilled" },
            { where : { id: parseInt(external_reference) }},
        );
        res.redirect("http://localhost:3000/home") //AGREGAR COMPONENTE QUE CONTENGA EL PERFIL DEL CLIENTE.
    }
    catch(error) {
        res.status(400).send(error); 
    };
};

// ----> ORDER-BY_CLIENT-ID
const orderByClientId = async (req, res) => {
    try { 
        const id = req.params.id
        const orderDB = await Order.findAll({
            where : { clientId : id },
        })

        res.status(200).send(orderDB)
    }
    catch(error) {
        console.log(error); 
        res.status(404).send("NOT FOUND.")
    }
}

module.exports = {
    getAllOrder,
    getOrderById,
    postOrder,
    canceledOrder,
    postMP,
    patchOrder,
    orderByClientId
};