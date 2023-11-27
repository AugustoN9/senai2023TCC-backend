const solicitacaoService = require("../service/solicitacao.service");

const findSolicitacaoByIdController = async (req, res) => {
    try {
        const solicitacao = await solicitacaoService.findSolicitacaoByIdService(req.params.id);

        if (!solicitacao) {
            return res.status(404).send({ message: "Solicitacao não encontrado, tente novamente" });
        }
        return res.status(200).send(solicitacao);
    }
    catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(400).send({ Message: `ID  informado esta incorreto, tente novamente! ` });
        }
        return res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const findAllSolicitacaoController = async (req, res) => {
    try {
        res.status(200).send(await solicitacaoService.findAllSolicitacaoService(req.query.limit, req.query.offset));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
    }
};

const createSolicitacaoController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.amostra) {
            return res.status(400).send({
                message: `O campo 'amostra' precisa ser preenchido! `
            });
        }
        return res.status(201).send(await solicitacaoService.createSolicitacaoService(body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const updateSolicitacaoController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.amostra) {
            return res.status(400).send({
                message: `O campo 'amostra' precisa ser preenchido! `
            });
        }
        return res.send(await solicitacaoService.updateSolicitacaoService(req.params.id, body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removeSolicitacaoController = async (req, res) => {
    try {

        const delSolicitacao = await solicitacaoService.removeSolicitacaoService(req.params.id);

        if (delSolicitacao == null) {
            res.status(404).send({ Message: `Solicitacao náo encontrada, tente novamente! ` });
        }
        else {
            res.status(200).send({ Message: `Sucesso, Solicitacao deletada! ` });
        }
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};



module.exports = {
 findAllSolicitacaoController,
 findSolicitacaoByIdController,
 createSolicitacaoController,
 updateSolicitacaoController,
 removeSolicitacaoController
}