const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const Inventory = require("../models/inventory.js");

router.get("/:itemName/availaleQuantity", async (req, res) => {
  try {
    const inventory = await Inventory.find({ item_name: req.params.itemName });
    res.status(200).json({
      status: "success",
      inventory,
    });
  } catch (e) {
    res.status(403).json({
      status: "failed",
      messege: e.messege,
    });
  }
});

module.exports = router;
