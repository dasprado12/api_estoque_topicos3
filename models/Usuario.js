const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const conn = require("../database/dbConnection")

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const UserSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
        },    
        email: {
            type: String,
            required: true,
            unique: true,
        },
        senha: {
            type: String,
            required: true,
        },   
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

UserSchema.plugin(autoIncrement.plugin, {
    model: "User",
    field: "id",
    startAt: 1,
    incrementBy: 1,
});

module.exports = mongoose.model("User", UserSchema);