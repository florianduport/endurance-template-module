const mongoose = require("mongoose");

const {module-name}Schema = new mongoose.Schema({

  //add fields
  name: {
    type: String,
    default: "New recruit",
  },

});

const {module-name} = mongoose.model("{module-name}", {module-name}Schema, '{module-name}');

module.exports = {module-name};
