const categoriaExameService = require("../service/categoriaExame.service");

const findCategoriaExameByIdController = async (req, res) => {
    try {
        const categoriaExame = await categoriaExameService.findCategoriaExameByIdService(req.params.id);

        if (!categoriaExame) {
            return res.status(404).send({ message: "Categoria não encontrado, tente novamente" });
        }
        return res.status(200).send(categoriaExame);
    }
    catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(400).send({ Message: `ID  informado esta incorreto, tente novamente! ` });
        }
        return res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const findAllCategoriaExameController = async (req, res) => {
    try {
        res.status(200).send(await categoriaExameService.findAllCategoriaExameService(req.query.limit, req.query.offset));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const createCategoriaExameController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.numero) {
            return res.status(400).send({
                message: `O campo 'numero' precisa ser preenchido! `
            });
        }
        return res.status(201).send(await categoriaExameService.createCategoriaExameService(body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const updateCategoriaExameController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.numero) {
            return res.status(400).send({
                message: `O campo 'numero' precisa ser preenchido! `
            });
        }
        return res.send(await categoriaExameService.updateCategoriaExameService(req.params.id, body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removeCategoriaExameController = async (req, res) => {
    try {

        const delCategoria = await categoriaExameService.removeCategoriaExameService(req.params.id);

        if (delCategoria == null) {
            res.status(404).send({ Message: `Categoria náo encontrada, tente novamente! ` });
        }
        else {
            res.status(200).send({ Message: `Sucesso, Categoria deletada! ` });
        }
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

module.exports = {
 findAllCategoriaExameController,
 findCategoriaExameByIdController,
 createCategoriaExameController,
 updateCategoriaExameController,
 removeCategoriaExameController
}