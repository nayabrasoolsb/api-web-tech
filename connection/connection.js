const mongoose = require("mongoose");

mongoose.set('strictQuery', true)
mongoose
  .connect("mongodb://localhost:27017/temp/api_web_tech_assignment")
  .then(console.log("succesfully connected"))
  .catch(console.error);
