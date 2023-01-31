const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const Inventory = require("../models/inventory.js");

router.post("/createInventory", async(req, res) => {
  try {
    const newItem = await Inventory.create(req.body);
    res.status(200).json({
      status: "success",
      newItem
    })
  } catch (e) {
    res.status(403).json({
      status: "failed",
      messege: e
    })
  }
})
router.get("/inventory", async(req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json({
      status: "success",
      inventory
    })
  } catch (e) {
    res.status(403).json({
      status: "failed",
      messege: e.messege
    })
  }
})

module.exports = router;