const { Schema, model } = require("mongoose");
const inventorySchema = new Schema(
  {
    inventory_id: { type:String, unique: true, required: true },
    inventory_type: { type:String, required: true },
    item_name: { type:String, unique: true, required: true },
    available_quantity: { type:Number, required: true },
  },
  { timestamps: true },
);

const inventoryModel = model("Inventory", inventorySchema);
module.exports = inventoryModel;
