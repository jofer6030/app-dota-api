const mongoose = require("mongoose");

const heroesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img_avatar: {
    type: String,
    required: true,
  },
  img_body: {
    type: String,
    required: true,
  },
  feature: {
    type: String,
    required: true,
  },
  history: {
    type: String,
    required: true,
  },
  tipo_ataque: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TypeAttack",
    required: true,
  },
  attribute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Attribute",
    required: true,
  },
  difficulty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Difficulty",
    required: true,
  },
  abilities: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Abilitie",
    required: true,
  },
  strength: {
    type: Number,
    required: true,
  },
  agility: {
    type: Number,
    required: true,
  },
  intelligence: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Heroe", heroesSchema);
