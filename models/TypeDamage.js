const mongoose = require("mongoose");

const typesDamageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TypesDamage", typesDamageSchema);
