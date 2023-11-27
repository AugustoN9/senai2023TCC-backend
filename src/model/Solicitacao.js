const mongoose = require("mongoose");

const solicitacaoSchema = new mongoose.Schema({
    numeroSolicitacao: { type: Number, unique: true, required: true },
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
    prioridade: { type: String, required: false, default: "Não Urgente" },
    solicitacaoStatus: { type: String, required: false, default: "Aguardando Validacao" },

    createdAt: { type: Date, required: true, default: Date.now() }
});

const Solicitacao = mongoose.model("solicitacaos", solicitacaoSchema);

module.exports = Solicitacao;