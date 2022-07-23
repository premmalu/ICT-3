const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/users", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Database successfully");
  })
  .catch((error) => console.log("Connection to Database was unsuccessful"));

  
module.exports=mongoose;