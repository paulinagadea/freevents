const { Pack_services, Provider, Client, Order } = require('../db')
const mercadopago = require("mercadopago");
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

mercadopago.configure({
    access_token: "TEST-6562319595568150-092201-ac18d360b44928343eb3254da5026c2b-174164644",
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
        res.status(404).send('Not found. veremos esta wea')
    }
        
}; 

//----> POST-ORDER
const postOrder = async (req, res) => {
    const { clientId, providerId, packServiceId, status, event_date, event_address, email } = req.body; 
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
            email,
            status, 
            event_date, 
            event_address,
            price: packServiceDb.price
        });

        await orderCreate.setProvider(providerDb.id); 
        await orderCreate.setClient(clientDb);
        await orderCreate.setPack_service(packServiceDb.id); 
        
        // console.log("QUE FUNCIONE LA WEA")

        res.status(201).json(orderCreate); 
    }
    catch (error) {
        console.log(error); 
        res.status(400).send('Bad request.'); 
    };
    
//     const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

//     oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

//     async function sendMail() {
//         try {

//             const accessToken = await oAuth2Client.getAccessToken()
           
//             const transporter = nodemailer.createTransport({
//                 service: "gmail",
//                 auth: {
//                     type: "OAuth2",
//                     user: "kristhianlizcano@gmail.com",
//                     clientId: CLIENT_ID,
//                     clientSecret: CLIENT_SECRET,
//                     refreshToken: REFRESH_TOKEN,
//                     accessToken: accessToken,


//                 },
//             })
            
//             const mailOptions = {
//                 from: "Freevents <kristhianlizcano@gmail.com>",
//                 to: email,
//                 subject: "Freevents",
//                 text: "COMPRA REALIZADA", 
                
      
                
//             }; 

           

//             const result = await transporter.sendMail(mailOptions);
//             return result;
//         }
//         catch(error) {
//             console.log(error);
//         }
//     } 

//     sendMail()
//     .then(result => res.status(200).send("Enviado"))
//     .catch(error => console.log(error));
}; 

//----> CANCELED-ORDER
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
    const { id } = req.body; 
    const orderMP = await Order.findOne({
        where : { id : id },
    })
    console.log( "ORDER MP", orderMP );

    let preference = {
        items: [
          {
            title: orderMP.id,
            unit_price: orderMP.price,
            quantity: 1,
          },
         ],
        external_reference: `${orderMP.id}`,
        back_urls: {
            success: `http://localhost:3001/order/payment-confirm`,
            failure: `http://localhost:3001/order/payment-confirm`,
            pending: `http://localhost:3001/order/payment-confirm`
        },
        auto_return: "approved",
      };
      const response = await mercadopago.preferences.create(preference);
    //   console.log("🚀 ~ file: getOrder.js ~ line 218 ~ postMP ~ response", response)
      const preferenceId = response.body.id; 
    //   console.log('preference en back', preferenceId)

      res.send({ preferenceId });
    }
    catch(error) {
        res.status(404).send(error);
    }
};

const urlPago = async (req, res) => {
    try {
        
        res.status(200).send("listo")
    } 
    catch (error) {
        res.status(404).send(error);
    }
    

}



//----> UPDATE-ORDER-POST-MP
const patchOrder = async (req, res) => {
    const payment_id = req.query.payment_id;
    const payment_status = req.query.status;
    const external_reference = req.query.external_reference;
    const merchant_order_id = req.query.merchant_order_id;

    console.log('external_reference', external_reference)
    try {
        await Order.update(
            { status : "fulfilled" },
            { where : { id: external_reference }},
        );
        
        const emailDb = await Order.findOne({
            where : { id : external_reference }
        })

        console.log('¿Que pedo?', emailDb )
        // res.redirect("http://localhost:3000/home") //AGREGAR COMPONENTE QUE CONTENGA EL PERFIL DEL CLIENTE.
    
        const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

    async function sendMail() {
            const accessToken = await oAuth2Client.getAccessToken()
           
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: "freeevents4@gmail.com",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken,
                },
            })
            
            const mailOptions = {
                from: "Freevents <freeevents4@gmail.com>",
                to: emailDb.email,
                subject: "Compra Exitosa",
                html: `<a href="https://freevents.vercel.app/"><div align="center"><img src="https://i.ibb.co/h9n1qrv/Tarjeta-de-Agradecimiento-Gracias-por-tu-compra-Rosa.png" align="center" alt="Tarjeta-de-Agradecimiento-Gracias-por-tu-compra-Rosa" border="0"></div></a>`, 
            }; 

            const result = await transporter.sendMail(mailOptions);
            return result;
   
    } 

    sendMail()
    .then(result => /*res.status(200).send("Enviado")*/res.redirect("http://localhost:3000/home"))
    // .catch(error => console.log(error));
    
    res.redirect("http://localhost:3000/home")
    }
    catch(error) {
        console.log(error)
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

// PERRITOS SALVAJES SIEMPRE.
module.exports = {
    getAllOrder,
    getOrderById,
    postOrder,
    canceledOrder,
    postMP,
    urlPago,
    patchOrder,
    orderByClientId
};