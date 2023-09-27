const mongoose = require("mongoose");

const medicoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    crm: { type: Number, unique: true, required: true },
    especialidade: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() }
});

const Medico = mongoose.model("medicos", medicoSchema);

module.exports = Medico;