const express = require("express");
const connection = require("./connection/connection.js");
const inventoryRoute = require("./routes/inventory");
const customerRoute = require("./routes/customer");
const ordersRoute = require("./routes/orders");

const app = express();

app.use("/api/v1", customerRoute);
app.use("/api/v1", ordersRoute);
app.use("/api/v1", inventoryRoute);


app.get("/", (req, res) => {
  res.send("ok");
});
app.use("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    messege: "page not found",
  });
});
app.listen(3005, () => {
  console.log("server is up on port 3005");
});
