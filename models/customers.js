const { Schema, model } = require("mongoose");
const customerShcema = new Schema(
  {
    customer_id: { type:String, unique: true, required: true },
    customer_name: { type:String, required: true },
    email: { type:String, unique: true, required: true },
  },
  { timestamps: true },
);

const customerModel = model("Customers", customerShcema);
module.exports = customerModel;
