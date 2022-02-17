const mongoose = require("mongoose");

const abilitiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ability: {
    type: String,
  },
  type_damage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TypesDamage",
  },
  affect: {
    type: String,
  },
  speel_immunity: {
    type: Boolean,
  },
  dissipation: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Abilitie", abilitiesSchema);
