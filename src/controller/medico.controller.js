const medicoService = require("../service/medico.service");

const findMedicoByIdController = async (req, res) => {
    try {
        const med = await medicoService.findMedicoByIdService(req.params.id);

        if (!med) {
            return res.status(404).send({ message: "Medico não encontrado, tente novamente" });
        }
        return res.status(200).send(med);
    }
    catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(400).send({ Message: `ID  informado esta incorreto, tente novamente! ` });
        }
        return res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const findAllMedicoController = async (req, res) => {
    try {
        res.status(200).send(await medicoService.findAllMedicoService(req.query.limit, req.query.offset));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const createMedicoController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({
                message: `O campo 'nome' precisa ser preenchido! `
            });
        }
        return res.status(201).send(await medicoService.createMedicoService(body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const updateMedicoController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({
                message: `O campo 'nome' precisa ser preenchido! `
            });
        }

        return res.send(await medicoService.updateMedicoService(req.params.id, body));

    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removeMedicoController = async (req, res) => {
    try {

        const delMedico = await medicoService.removeMedicoService(req.params.id);

        if (delMedico == null) {
            res.status(404).send({ Message: `Medico náo encontrado, tente novamente! ` });
        }
        else {
            res.status(200).send({ Message: `Sucesso, Medico deletado! ` });
        }
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

module.exports = {
   findAllMedicoController,
   findMedicoByIdController,
   createMedicoController,
   updateMedicoController,
   removeMedicoController
}