const express = require('express');
const routes = require("./routes.js");
const cors = require('cors')

require("../database/index.js");


class App {
    constructor() {
        this.app = express();
        this.app.use(express.json())
        this.routes();
        this.app.listen(process.env.PORT || 5000 )
    }
    
    routes() {
        this.app.use(cors())
        this.app.use(routes);
    }
}

module.exports = new App().app