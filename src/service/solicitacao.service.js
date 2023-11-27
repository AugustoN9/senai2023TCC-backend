const Solicitacao = require("../model/Solicitacao");

const findAllSolicitacaoService = (limit, offset) => {
    return Solicitacao.find().limit(limit).skip(offset);
};

const findSolicitacaoByIdService = (id) => {
    return Solicitacao.findById(id);
};

const createSolicitacaoService = (body) => {
    return Solicitacao.create(body);
};

const updateSolicitacaoService = (id, body) => {
    return Solicitacao.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeSolicitacaoService = (id) => {
    return Solicitacao.findByIdAndRemove(id);
}

module.exports = {
    findAllSolicitacaoService,
    findSolicitacaoByIdService,
    createSolicitacaoService,
    updateSolicitacaoService,
    removeSolicitacaoService
}