const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderDishItemSchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  order_dish_id: {  
    type: Schema.Types.ObjectId,
    ref: 'OrderDish',
    required: true,
  },
  dish_id: {  
    type: Schema.Types.ObjectId,
    ref: 'Dish',
    required: true,
  }
  ,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  }
});

const OrderDishItem = mongoose.model('OrderDishItem', orderDishItemSchema);
module.exports = OrderDishItem;
