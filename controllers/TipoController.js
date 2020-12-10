const Tipo = require("../models/Tipo")


class TipoController {

    async index(req, res){
        try {
            const tipo = await Tipo.find();
            return res.status(200).json(tipo)
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` });
        }
    }

    async indexPk(req, res){
        const { nome } = req.params;
        try {
            const tipo = await Usuario.find({'id': nome});
            return res.status(200).json(tipo)
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` });
        }
    }

    async store(req, res){
        try {
            const tipo = await Tipo.create(req.body)
            return res.status(200).json(tipo) 
        } catch(error){
            return res.status(500).json({ message: `Erro no servidor! ${error}` });

        }
    }

    async delete(req, res){
        const { id } = req.params;
        try {
            const deleteTipo = await Tipo.deleteOne({ 'id': id })
            if(deleteTipo.n > 0){
                return res.status(200).json({message: "Deletado com Sucesso"})
            }if(deleteTipo.n == 0){
                return res.status(200).json({message: `Produto ${id} não existe`})
            }
                        
        } catch (error) {
            return res.status(500).json({ message: `Erro no servidor! ${error}` })
        }
    }

}

module.exports = new TipoController();