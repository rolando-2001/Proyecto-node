const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  dish_id: {
    type: Schema.Types.ObjectId,
    ref: "Dish",
    required: true,
     index: true 
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
