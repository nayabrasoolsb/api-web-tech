const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const Customer = require("../models/customers.js");

router.post("/createCustomer", async(req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);
    res.status(200).json({
      status: "success",
      newCustomer
    })
  } catch (e) {
    res.status(403).json({
      status: "failed",
      messege: e.messege
    })
  }
})
router.get("/customerDetails", async(req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({
      status: "success",
      customers
    })
  } catch (e) {
    res.status(403).json({
      status: "failed",
      messege: e.messege
    })
  }
})

module.exports = router;