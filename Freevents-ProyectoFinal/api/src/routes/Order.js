const { Router } = require('express');
const { getAllOrder, getOrderById, postOrder, canceledOrder, postMP, patchOrder, orderByClientId } = require('../controllers/getOrder')

const router = Router();

router.get('/', getAllOrder); 
router.get('/:id', getOrderById); 
router.post('/', postOrder);
router.patch('/:id', canceledOrder); 
router.post('/payment', postMP);
router.patch('/payment-confirm', patchOrder); 
router.get('/myorder/:id', orderByClientId)

module.exports = router;