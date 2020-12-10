const Usuario = require("../models/Usuario")


class UsuarioController {

    async index(req, res){
        try {
            const usuarios = await Usuario.find();
            return res.status(200).json(usuarios)
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` });
        }
    }

    async indexPk(req, res){
        const { id } = req.params;
        console.log(id)
        try {
            const usuarios = await Usuario.find({'id': id});
            return res.status(200).json(usuarios)
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` });
        }
    }

    async store(req, res){
        const { nome, email, senha } = req.body;
        try {
            const isCadastrado = await Usuario.findOne({
                'email': email
            })
            if(isCadastrado){
                return res.status(422).json({ message: `E-mail já cadastrado` });
            }
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` });
        }

        try {
            const usuario = await Usuario.create(req.body)
            return res.status(200).json(usuario) 
        } catch(error){
            return res.status(500).json({ message: `Erro no servidor! ${error}` });

        }
    }

    async modify(req, res){
        const { id } = req.params;
        const { nome } = req.body;
        try {
            const alter = await Usuario.updateOne( 
                { "id": id },
                { "nome": nome }
            )
            return res.status(200).json(alter)
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }
    }

    async delete(req, res){
        const { id } = req.params;
        try {
            const deleteUser = await Usuario.deleteOne({ 'id': id })
            if(deleteUser.n > 0){
                return res.status(200).json({message: "Deletado com Sucesso"})
            }if(deleteUser.n == 0){
                return res.status(200).json({message: `Usuário ${id} não existe`})
            }
                        
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }
    }

}

module.exports = new UsuarioController();
