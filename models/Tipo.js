const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const conn = require("../database/dbConnection")

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const TipoSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

TipoSchema.plugin(autoIncrement.plugin, {
    model: "Tipo",
    field: "id",
    startAt: 1,
    incrementBy: 1,
});

module.exports = mongoose.model("Tipo", TipoSchema);