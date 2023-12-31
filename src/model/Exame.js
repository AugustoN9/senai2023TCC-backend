const mongoose = require("mongoose");

const exameSchema = new mongoose.Schema({
    numeroExame: { type: Number, unique: true, required: true },
    tipoExame: { type: String, required: true },
    amostra: { type: String, required: true },
    origem: { type: String, required: true },
    solicitante: { type: String, required: true },
    especialidade: { type: String, required: true },
    crm: { type: Number, required: true },
    paciente: { type: String, required: true },
    cpf: { type: Number, required: true },
    genero: { type: String, required: true },
    pacienteDataNasc: { type: Date, required: true },
    historicoPaciente: { type: String, required: false },
    prioridade: { type: String, required: false },
    exameStatus: { type: String, required: false, default: "Aguardando Macroscopia" },

    createdAt: { type: Date, required: true, default: Date.now() }
});

const Exame = mongoose.model("exames", exameSchema);

module.exports = Exame;