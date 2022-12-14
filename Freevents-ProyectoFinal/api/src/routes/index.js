const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Provider = require('./Provider')
const ProviderLogin = require('./ProviderLogin')
const Service = require('./Service.js');
const Event = require('./Event.js');
const Client = require('./Client.js')
const Pack_service = require('./Pack_service')
const Order = require('./Order')
const Favorite = require('./Favorite');
const Review = require('./Review');
const Admin = require('./Admin');
const AdminLogin = require('./AdminLogin');
const NodeMailer = require('./NodeMailer');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/providers', Provider)
router.use('/loginprovider', ProviderLogin)
router.use('/services', Service);
router.use('/events', Event);
router.use('/client', Client); 
router.use('/packs', Pack_service);
router.use('/order', Order);
router.use('/favorites', Favorite);
router.use('/reviews', Review);
router.use('/admins', Admin);
router.use('/adminlogin', AdminLogin);
router.use('/send-mail', NodeMailer);

// router.get('/admins/:id', (req, res, next) => { })

// router.get('/free-event/admin', (req, res, next) => { })

// router.get('/free-event/provider', (req, res, next) => { })

// router.get('/events', (req, res, next) => { })

// router.get('/events/:id', (req, res, next) => { })

// router.get('/services', (req, res, next) => { })

// router.get('/services/:id', (req, res, next) => { })

// router.get('/orders', (req, res, next) => { })

// router.get('/orders/:id', (req, res, next) => { })

// router.get('/free-event/orders/admin', (req, res, next) => { })

// router.get('/reviews', (req, res, next) => { })

// router.get('/reviews/:id', (req, res, next) => { })

// router.get('/favorites', (req, res, next) => { })

// router.get('/favorites/:id', (req, res, next) => { })

// router.post('/admin', (req, res, next) => { })

// router.post('/user', (req, res, next) => { })

// router.post('/event', (req, res, next) => { })

// router.post('/service', (req, res, next) => { })

// router.post('/order', (req, res, next) => { })

// router.post('/review', (req, res, next) => { })

// router.post('/favorite', (req, res, next) => { })

// router.put('/free-event/admin/:id', (req, res, next) => { })

// router.put('/events/:id', (req, res, next) => { })

// router.put('/services/:id', (req, res, next) => { })

// router.delete('/free-event/admin/:id', (req, res, next) => { })

// router.delete('/providers/:id', (req, res, next) => { })

// router.delete('/events/:id', (req, res, next) => { })

// router.delete('/services/:id', (req, res, next) => { })

// router.delete('/favorites/:id', (req, res, next) => { })






module.exports = router;
