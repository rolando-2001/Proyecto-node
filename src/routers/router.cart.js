const express = require('express');

const router = express.Router();


const CartService = require('../services/cart.service.js');
const CartController = require('../controllers/controller.cart.js');

const cartService = new CartService(); 
const cartController = new CartController(cartService);

router.get('/cart',cartController.allCarts);
router.post('/cart',cartController.createCart);
router.delete('/cart/:id',cartController.deleteCart);
router.put('/cart/:id',cartController.decrementCart);


module.exports = router;
