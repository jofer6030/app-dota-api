const mongoose = require("mongoose");

const difficultsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Difficult", difficultsSchema);
