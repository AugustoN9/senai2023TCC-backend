const Laudo = require("../model/Laudo");

const findAllLaudoService = (limit, offset) => {
    return Laudo.find().limit(limit).skip(offset);
};

const findLaudoByIdService = (id) => {
    return Laudo.findById(id);
};

const createLaudoService = (body) => {
    return Laudo.create(body);
};

const updateLaudoService = (id, body) => {
    return Laudo.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeLaudoService = (id) => {
    return Laudo.findByIdAndRemove(id);
}


module.exports = {
    findAllLaudoService,
    findLaudoByIdService,
    createLaudoService,
    updateLaudoService,
    removeLaudoService
}