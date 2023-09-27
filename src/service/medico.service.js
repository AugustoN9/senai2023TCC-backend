const Medico = require("../model/Medico");

const findAllMedicoService = (limit, offset) => {
    return Medico.find().limit(limit).skip(offset);
};

const findMedicoByIdService = (id) => {
    return Medico.findById(id);
};

const createMedicoService = (body) => {
    return Medico.create(body);
};

const updateMedicoService = (id, body) => {
    return Medico.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeMedicoService = (id) => {
    return Medico.findByIdAndRemove(id);
}

module.exports = {
    findAllMedicoService,
    findMedicoByIdService,
    createMedicoService,
    updateMedicoService,
    removeMedicoService
}