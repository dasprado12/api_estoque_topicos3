const app = require("./app.js")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.listen(3000);