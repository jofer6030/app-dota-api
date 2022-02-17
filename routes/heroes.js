const router = require("express").Router();
const { check } = require("express-validator");

const { getHeroes, createHeroe, getHeroe } = require("../controllers/heroes");
const validarCampos = require("../middlewares/validar-campos");

router.get("/", getHeroes);
router.get("/:id", getHeroe);

router.post(
  "/new-hero",
  validarJWT,
  [
    check("name", "Name is required").not().isEmpty(),
    check("img_avatar", "Url of img_avatar is required").isURL(),
    check("img_body", "Url of img_body is required").isURL(),
    check("feature", "Feature is required").not().isEmpty(),
    check("history", "History is required").not().isEmpty(),
    check("strength", "Stats of strength is required").isNumeric(),
    check("agility", "Stats of agility is required").isNumeric(),
    check("intelligence", "Stats of intelligence is required").isNumeric(),
    check("tipo_ataque", "Type of atack is required").not().isEmpty(),
    check("attribute", "Attribute is required").not().isEmpty(),
    check("difficulty", "Difficulty is required").not().isEmpty(),
    check("abilities", "Abilities is required").isArray(),
    validarCampos,
  ],
  createHeroe
);

module.exports = router;
