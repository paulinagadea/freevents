const Admi = require('express').Router();
const bcrypt = require('bcrypt')
const {getAllAdmins, getAdminByName, getAdminById } = require('../controllers/getAllAdmins.js');
const { Admin } = require('../models/Admin.js');

Admi.get('/', async (req, res) => {
    
    const { name } = req.query;
    // Si no recibo un nombre por query muestro todos los servicios.
    try {
        if (!name) {
            const clients = await getAllAdmins();
            res.status(200).send(clients);
        } else {
            const client = await getAdminByName(name);
            if (client.length) {
                res.status(200).send(client);
            } else {
                res.status(404).send("Admin not found");
            };
        };
    } catch(error) {
        res.send(error);
    };
});

Admi.get('/:id', async (req, res) => {
    
    try {
        const { id } = req.params
        const adminById = await getAdminById(id)

        console.log('adminId', adminById)

        res.status(200).json(adminById)

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})

Admi.post("/", async (req, res) => {
    const { name, email, passwordHash_admin, user_admin } = req.body;
    console.log('llega?', req.query)
    try {
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(passwordHash_admin, saltRounds)
        
        const adminCreated = await Admin.create({
            name, 
            email,
            passwordHash,
            user_admin
        })
        
        const savedAdmin = await adminCreated.save();

        res.status(200).json(savedAdmin);
    }
    catch (error) {
        console.log(error)
        res.status(400).send("Bad request.")
    }
})

Admi.put("/:id", async (req, res) => {

    try{
        
       await Admin.update(req.body, {
                   where: { id: req.params.id }
               });
               res.status(200).json({ succes: 'Update Admin' })
   
   } catch(error) {

       res.status(500).json({ message: 'Error', error })

   }
   
})

Admi.delete("/:id", async (req, res) => {

    try {
        await Admin.destroy({
                    where: { id: req.params.id }
                });
                res.status(200).json({ success: 'Delete Admin' })

    } catch (error) {
        res.status(500).json({ message: 'Error', error })
    }
})


module.exports = Admi;