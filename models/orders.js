const { Schema, model } = require("mongoose");
const orderShema = new Schema(
  {
    customer_id: { type:String, required: true },
    inventory_id: { type:String, required: true },
    item_name: { type:String, required: true },
    quantity: { type:String, required: true },
  },
  { timestamps: true },
);

const orderModel = model("Orders", orderShema);
module.exports = orderModel;
