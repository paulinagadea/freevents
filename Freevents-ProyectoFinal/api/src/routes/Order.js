const { Router } = require('express');
const { getAllOrder, getOrderById, postOrder, deleteOrder } = require('../controllers/getOrder')

const router = Router();

router.get('/', getAllOrder); 
router.get('/:id', getOrderById); 
router.post('/', postOrder);
router.delete('/:id', deleteOrder); 

module.exports = router;