const express = require('express');
const disciplina = require("./routes.js");

require("../database/index.js");


class App {
    constructor() {
        this.app = express();
        this.app.use(express.json())
        this.routes();
        this.app.listen(process.env.PORT || 5000 )
    }

    routes() {
        this.app.use(disciplina);
    }
}

module.exports = new App().app