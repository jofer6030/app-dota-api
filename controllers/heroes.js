const Hero = require("../models/Heroes");
const TypeAtack = require("../models/TypeAtack");
const Attribute = require("../models/Attributes");
const Difficulty = require("../models/Difficult");
const Ability = require("../models/Abilities");

const getHeroes = async (req, res) => {
  try {
    const heroes = await Hero.find();
    return res.status(200).json({
      data: heroes,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

const createHeroe = async (req, res) => {
  const { tipo_ataque, attribute, difficulty, abilities, ...others } = req.body;
  try {
    const tA = TypeAtack.findOne({ name: tipo_ataque });
    const Att = Attribute.findOne({ name: attribute });
    const diff = Difficulty.findOne({ name: difficulty });
    const Abill = abilities.map((ability) => {
      return Ability.findOne({ name: ability });
    });

    const Abill_arr = await Promise.all(Abill);

    const [tipoAtack_, attribute_, difficulty_] = await Promise.all([
      tA,
      Att,
      diff,
    ]);

    if (!tipoAtack_)
      return res.status(400).json({ msg: "Type of atack not found" });
    if (!attribute_)
      return res.status(400).json({ msg: "Attribute not found" });
    if (!difficulty_)
      return res.status(400).json({ msg: "Difficulty not found" });
    if (!Abill_arr.length)
      return res.status(400).json({ msg: "Abilities not found" });

    const data = {
      ...others,
      tipo_ataque: tipoAtack_._id,
      attribute: attribute_._id,
      difficulty: difficulty_._id,
      abilities: Abill_arr.map((ability) => {
        return ability._id;
      }),
    };

    const hero = new Hero(data);

    const heroSaved = await hero.save();
    return res.status(201).json({
      msg: "Heroe created",
      data: heroSaved,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

const getHeroe = async (req, res) => {
  const { id } = req.params;
  try {
    const hero = await Hero.findById(id);
    if (!hero) return res.status(404).json({ msg: "Heroe not found" });
    return res.status(200).json({
      data: hero,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

module.exports = {
  getHeroes,
  createHeroe,
  getHeroe,
};
