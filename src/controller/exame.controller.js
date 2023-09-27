const exameService = require("../service/exame.service");

const findExameByIdController = async (req, res) => {
    try {
        const exame = await exameService.findExameByIdService(req.params.id);

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

const findAllExameController = async (req, res) => {
    try {
        res.status(200).send(await exameService.findAllExameService(req.query.limit, req.query.offset));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const createExameController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.topologia) {
            return res.status(400).send({
                message: `O campo 'topologia' precisa ser preenchido! `
            });
        }
        return res.status(201).send(await exameService.createExameService(body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const updateExameController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.topologia) {
            return res.status(400).send({
                message: `O campo 'topologia' precisa ser preenchido! `
            });
        }
        return res.send(await exameService.updateExameService(req.params.id, body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removeExameController = async (req, res) => {
    try {

        const delPaciente = await exameService.removeExameService(req.params.id);

        if (delPaciente == null) {
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

const addMedicoExameController = async (req, res) => {
    try {
        res.status(201).send(await exameService.addMedicoExameService(req.params.id, req.body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removeMedicoExameController = async (req, res) => {
    try {
        res.status(200).send(await exameService.removeMedicoExameService(req.params.id, req.body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const addPacienteExameController = async (req, res) => {
    try {
        res.status(201).send(await exameService.addPacienteExameService(req.params.id, req.body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removePacienteExameController = async (req, res) => {
    try {
        res.status(200).send(await exameService.removePacienteExameService(req.params.id, req.body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

module.exports = {
 findAllExameController,
 findExameByIdController,
 createExameController,
 updateExameController,
 removeExameController,
 addMedicoExameController,
 removeMedicoExameController,
 addPacienteExameController,
 removePacienteExameController
}