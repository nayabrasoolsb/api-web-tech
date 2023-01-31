const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const Orders = require("../models/orders.js");
const Inventory = require("../models/inventory.js");

router.post("/createOrder", async (req, res) => {
  try {
    const inventorty = await Inventory.find({ item_name: req.body.item_name });
    // console.log(inventorty)
    if (inventorty[0].available_quantity < req.body.quantity) {
      return res.status(404).json({
        status: "out of stock",
      });
    }
    // console.log(req.body);
    await Inventory.updateOne(
      { item_name: req.body.item_name },
      {
        $set: {
          available_quantity:
            inventorty[0].available_quantity - Number(req.body.quantity),
        },
      },
    );
    const newItem = await Orders.create(req.body);
    res.status(200).json({
      status: "success",
      newItem,
    });
  } catch (e) {
    res.status(403).json({
      status: "failed",
      messege: "could not find the item",
    });
  }
});
router.get("/orders", async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(200).json({
      status: "success",
      orders,
    });
  } catch (e) {
    res.status(403).json({
      status: "failed",
      messege: e.messege,
    });
  }
});

module.exports = router;
