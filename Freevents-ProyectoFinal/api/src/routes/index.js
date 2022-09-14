const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/users/admin', (req, res, next) => {})

router.get('/events', (req, res, next) => {})

router.get('/events/:id', (req, res, next) => {})

router.get('/services', (req, res, next) => {})

router.get('/services/:id', (req, res, next) => {})

router.get('/providers', (req, res, next) => {})

router.get('/providers/:id', (req, res, next) => {})

router.post('/user', (req, res, next) => {})

router.post('/provider', (req, res, next) => {})

router.post('/event', (req, res, next) => {})

router.post('/service', (req, res, next) => {} )

router.put('/users/admin/:id', (req, res, next) => {})

router.put('/providers/:id', (req, res, next) => {})

router.put('/events/:id', (req, res, next) => {})

router.put('/services/:id', (req, res, next) => {} )

router.delete('/users/admin/:id', (req, res, next) => {})

router.delete('/providers/:id', (req, res, next) => {})

router.delete('/events/:id', (req, res, next) => {})

router.delete('/services/:id', (req, res, next) => {} )






module.exports = router;
