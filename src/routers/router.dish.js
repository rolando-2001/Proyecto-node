const express = require('express');

const DishService = require('../services/dish.service.js');
const DishController = require('../controllers/controller.dish.js');
const { validarJWT } = require('../helpers/validator-jwt.js');


const router = express.Router();

const dishService = new DishService();
const dishController = new DishController(dishService);


//,validarJWT

router.get('/dish',dishController.allDishes);

module.exports = router;