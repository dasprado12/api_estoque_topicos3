const Produto = require("../models/Produto")
const Tipo = require("../models/Tipo")



class ProdutoController{
    async index(req, res){
        try {
            const produto = await Produto.find({'user_id': req.userId});
            return res.status(200).json(produto)
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` });
        }
    }

    async indexPk(req, res){
        const { id } = req.params;
        console.log(id)
        try {
            const produto = await Produto.find({'id': id, 'user_id': req.userId});
            return res.status(200).json(produto)
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` });
        }
    }

    async store(req, res){
        const { nome, tipo } = req.body;

        const body = req.body 
        body['user_id'] = req.userId



        try {
            const exist = await Tipo.findOne({'nome': tipo})
            if( !exist ){ 
                return res.status(422).json({ message: `Tipo não cadastrado` });
            }
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` });
        }

        try {
            const isCadastrado = await Produto.findOne({ nome, 'user_id': req.userId})
            if(isCadastrado){
                return res.status(422).json({ message: `Produto já cadastrado` });
            }
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` });
        }

        try {
            const produto = await Produto.create(body)
            return res.status(200).json(produto) 
        } catch(error){
            return res.status(500).json({ message: `Erro no servidor! ${error}` });

        }
    }

    async modify(req, res){
        const { id } = req.params;
        const { nome, descricao, tipo, quantidade, preco } = req.body;
        try {
            const alter = await Produto.updateOne( 
                { "id": id },
                { nome, descricao, tipo, quantidade, preco }
            )
            return res.status(200).json(alter)
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }
    }

    async delete(req, res){
        const { id } = req.params;
        try {
            const deleteProduct = await Produto.deleteOne({ 'id': id })
            if(deleteProduct.n > 0){
                return res.status(200).json({message: "Deletado com Sucesso"})
            }if(deleteProduct.n == 0){
                return res.status(200).json({message: `Produto ${id} não existe`})
            }
                        
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }
    }
}

module.exports = new ProdutoController();
