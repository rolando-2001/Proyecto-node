const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderDishSchema = new Schema({
  order_date: {
    type: Date,
    default: Date.now,
  },
  total: {
    type: Number,
    required: true,
  },
  invoice_report_url: {
    type: String,
    maxlength: 200,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "canceled"],
    default: "pending",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const OrderDish = mongoose.model("OrderDish", orderDishSchema);
module.exports = OrderDish;
