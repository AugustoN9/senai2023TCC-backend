const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: Number, unique: true, required: true },
    genero: { type: String, required: true },
    idade: { type: Number, required: true },
    createdAt: { type: Date, required: true, default: Date.now() }
});

const Paciente = mongoose.model("pacientes", pacienteSchema);

module.exports = Paciente;