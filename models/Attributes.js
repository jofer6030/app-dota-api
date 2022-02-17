const mongoose = require("mongoose");

const attributesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Attribute", attributesSchema);
