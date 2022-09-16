const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Provider = require('./Provider')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/providers', Provider)

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
