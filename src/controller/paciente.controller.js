const pacienteService = require("../service/paciente.service");

const findPacienteByIdController = async (req, res) => {
    try {
        const paciente = await pacienteService.findPacienteByIdService(req.params.id);

        if (!paciente) {
            return res.status(404).send({ message: "Paciente não encontrado, tente novamente" });
        }
        return res.status(200).send(paciente);
    }
    catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(400).send({ Message: `ID  informado esta incorreto, tente novamente! ` });
        }
        return res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const findAllPacienteController = async (req, res) => {
    try {
        res.status(200).send(await pacienteService.findAllPacienteService(req.query.limit, req.query.offset));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const createPacienteController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({
                message: `O campo 'nome' precisa ser preenchido! `
            });
        }
        return res.status(201).send(await pacienteService.createPacienteService(body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const updatePacienteController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({
                message: `O campo 'nome' precisa ser preenchido! `
            });
        }

        return res.send(await pacienteService.updatePacienteService(req.params.id, body));

    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removePacienteController = async (req, res) => {
    try {

        const delPaciente = await pacienteService.removePacienteService(req.params.id);

        if (delPaciente == null) {
            res.status(404).send({ Message: `Paciente náo encontrado, tente novamente! ` });
        }
        else {
            res.status(200).send({ Message: `Sucesso, Paciente deletado! ` });
        }
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

module.exports = {
    findAllPacienteController,
    findPacienteByIdController,
    createPacienteController,
    updatePacienteController,
    removePacienteController
}