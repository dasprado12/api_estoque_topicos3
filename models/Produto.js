const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const conn = require("../database/dbConnection")

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const ProdutoSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            unique: true,
        },    
        quantidade: {
            type: Number,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
        user_id: {
            type: Number,
            required: true,
        },
        tipo: {
            type: String,
            required: true,
        }, 
        preco: {
            type: Number,
            required: true
        }  
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

ProdutoSchema.plugin(autoIncrement.plugin, {
    model: "Produto",
    field: "id",
    startAt: 1,
    incrementBy: 1,
});

module.exports = mongoose.model("Produto", ProdutoSchema);