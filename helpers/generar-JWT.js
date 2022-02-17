const jwt = require("jsonwebtoken");

const generarJWT = (id, email) => {
  return new Promise((resolve, reject) => {
    const payload = { id, email };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se puedo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = generarJWT;
