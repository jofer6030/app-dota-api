const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../db/dbConnect");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;

    this.paths = {
      auth: "/api/v1/auth",
      heroes: "/api/v1/heroes",
    };

    this.dbConnect();
    this.middleware();
    this.routes();
  }

  async dbConnect() {
    await dbConnection();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.paths.auth, require("../routes/auth"));
    this.app.use(this.paths.heroes, require("../routes/heroes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server listening on port " + this.port);
    });
  }
}

module.exports = Server;
