const laudoService = require("../service/laudo.service");

const findLaudoByIdController = async (req, res) => {
    try {
        const exame = await laudoService.findLaudoByIdService(req.params.id);

        if (!exame) {
            return res.status(404).send({ message: "Exame não encontrado, tente novamente" });
        }
        return res.status(200).send(exame);
    }
    catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(400).send({ Message: `ID  informado esta incorreto, tente novamente! ` });
        }
        return res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const findAllLaudoController = async (req, res) => {
    try {
        res.status(200).send(await laudoService.findAllLaudoService(req.query.limit, req.query.offset));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const createLaudoController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.macroscopia) {
            return res.status(400).send({
                message: `O campo 'macroscopia' precisa ser preenchido! `
            });
        }
        return res.status(201).send(await laudoService.createLaudoService(body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const updateLaudoController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.macroscopia) {
            return res.status(400).send({
                message: `O campo 'macroscopia' precisa ser preenchido! `
            });
        }
        return res.send(await laudoService.updateLaudoService(req.params.id, body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removeLaudoController = async (req, res) => {
    try {

        const delLaudo = await laudoService.removeLaudoService(req.params.id);

        if (delLaudo == null) {
            res.status(404).send({ Message: `Exame náo encontrado, tente novamente! ` });
        }
        else {
            res.status(200).send({ Message: `Sucesso, Exame deletado! ` });
        }
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};



module.exports = {
 findAllLaudoController,
 findLaudoByIdController,
 createLaudoController,
 updateLaudoController,
 removeLaudoController
}