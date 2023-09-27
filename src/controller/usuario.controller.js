const userService = require("../service/usuario.service");
const exameService = require("../service/exame.service");

const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user) {
            return res.status(404).send({ message: "Usuario não encontrado, tente novamente" });
        }
        return res.status(200).send(user);
    }
    catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(400).send({ Message: `ID  informado esta incorreto, tente novamente! ` });
        }
        return res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const findAllUserController = async (req, res) => {
    try {
        res.status(200).send(await userService.findAllUserService(req.query.limit, req.query.offset));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const createUserController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({
                message: `O campo 'nome' precisa ser preenchido! `
            });
        }
        return res.status(201).send(await userService.createUserService(body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const updateUserController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({
                message: `O campo 'nome' precisa ser preenchido! `
            });
        }

        return res.send(await userService.updateUserService(req.params.id, body));

    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removeUserController = async (req, res) => {
    try {

        const deletedUser = await userService.removeUserService(req.params.id);

        if (deletedUser == null) {
            res.status(404).send({ Message: `Usuario náo encontrado, tente novamente! ` });
        }
        else {
            res.status(200).send({ Message: `Sucesso, usuario deletado! ` });
        }
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const addUserExameController = async (req, res) => {
    try {

        const addExame = await exameService.findExameByIdService(req.params.id);
        console.log(addExame); 

        if (addExame == null) {
            res.status(404).send({ Message: `Exame náo encontrado, tente novamente! ` });
        }
        else {
            res.status(201).send(await userService.addUserExameService(req.params.id, res.body));
        }

    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removeUserExameController = async (req, res) => {
    try {
        res.status(200).send(await userService.removeUserExameService(req.params.id, req.body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};


module.exports = {
    findUserByIdController,
    findAllUserController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserExameController,
    removeUserExameController
}