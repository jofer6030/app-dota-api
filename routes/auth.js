const router = require("express").Router();
const { check } = require("express-validator");

const { loginUser, registerUser } = require("../controllers/auth");
const validarCampos = require("../middlewares/validar-campos");

router.post(
  "/login",
  [
    check("email", "Email no válido").isEmail(),
    check("password", "Password es requerido").not().isEmpty(),
    validarCampos,
  ],
  loginUser
);

router.post(
  "/register",
  [
    check("name", "El nombre es requerido").not().isEmpty(),
    check("email", "Email no válido").isEmail(),
    check("password", "Password es requerido").not().isEmpty(),
    check("confirm_password", "Las contraseñas no coinciden").custom(
      (value, { req }) => value === req.body.password
    ),
    validarCampos,
  ],
  registerUser
);

module.exports = router;
