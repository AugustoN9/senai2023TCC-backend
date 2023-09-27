const Paciente = require("../model/Paciente");

const findAllPacienteService = (limit, offset) => {
    return Paciente.find().limit(limit).skip(offset);
};

const findPacienteByIdService = (id) => {
    return Paciente.findById(id);
};

const createPacienteService = (body) => {
    return Paciente.create(body);
};

const updatePacienteService = (id, body) => {
    return Paciente.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removePacienteService = (id) => {
    return Paciente.findByIdAndRemove(id);
}

module.exports = {
    findAllPacienteService,
    findPacienteByIdService,
    createPacienteService,
    updatePacienteService,
    removePacienteService
}