const mongoose = require("mongoose");

const attackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TypeAttack", attackSchema);
