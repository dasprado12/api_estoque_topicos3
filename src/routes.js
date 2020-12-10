const Router = require('express')

const UsuarioController = require("../controllers/UsuarioController.js");
const ProdutoController = require("../controllers/ProdutoController.js");
const TipoController = require("../controllers/TipoController.js");

const authMiddleware =  require("../middlewares/auth");

const api = new Router()


api.get("/", (req, res) => {
    return res.json("A aplicação está rodando")
})

api.post(    "/login",       UsuarioController.login)
api.post(    "/cadastro",    UsuarioController.store)


// api.get(    "/usuarios",        UsuarioController.index)
// api.get(    "/usuarios/:id",    UsuarioController.indexPk)
// api.post(   "/usuarios",        UsuarioController.store)
// api.patch(  "/usuarios/:id",    UsuarioController.modify)
// api.delete( "/usuarios/:id",    UsuarioController.delete)


api.get(    "/produtos",        authMiddleware, ProdutoController.index)
api.get(    "/produtos/:id",    authMiddleware, ProdutoController.indexPk)
api.post(   "/produtos",        authMiddleware, ProdutoController.store)
api.patch(  "/produtos/:id",    authMiddleware, ProdutoController.modify)
api.delete( "/produtos/:id",    authMiddleware, ProdutoController.delete)


api.get(    "/tipos",           authMiddleware, TipoController.index)
api.post(   "/tipos",           authMiddleware, TipoController.store)
api.delete( "/tipos/:id",       authMiddleware, TipoController.delete)

module.exports = api