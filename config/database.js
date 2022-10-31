const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/javascriptNote")
  .then(() => console.log("Connection succesful"))
  .catch((error) => console.error(error));
