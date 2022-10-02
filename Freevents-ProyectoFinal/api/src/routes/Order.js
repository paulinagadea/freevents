const { Router } = require('express');
const { getAllOrder, getOrderById, postOrder, canceledOrder, postMP, patchOrder, orderByClientId, urlPago } = require('../controllers/getOrder')

const router = Router();

router.get('/', getAllOrder); 
router.get('/payment-confirm', patchOrder);
router.get('/:id', getOrderById); 
router.post('/', postOrder);
router.patch('/:id', canceledOrder); 
router.post('/payment', postMP);
router.get('/myorder/:id', orderByClientId)
// router.post("/procesarpago", urlPago)

module.exports = router;