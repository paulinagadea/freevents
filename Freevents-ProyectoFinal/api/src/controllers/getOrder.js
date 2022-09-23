const { Pack_services, Provider, Client, Order } = require('../db')

//----> GET-ALL-ORDER
const getAllOrder = async (req, res) => {
    try {
        const allOrder = await Order.findAll({
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
const deleteOrder = async (req, res) => {
    try { 
        await Order.destroy({
            where : { id : req.params.id }
        })
        res.status(200).send('Order removed.')
    }
    catch(error) { 
        console.log(error); 
        res.status(400).send('Bad request.'); 
    }; 
}; 
module.exports = {
    getAllOrder,
    getOrderById,
    postOrder,
    deleteOrder 
    
}