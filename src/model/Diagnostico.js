const mongoose = require("mongoose");

const diagnosticoSchema = new mongoose.Schema({
    numeroExame: { type: Number, unique: true, required: true },
    patologista: { type: String, required: true },
    diagnostico: { type: String, required: false },
    diagnosticoStatus: { type: String, required: false, default: "Aguardando Validacao" },

    createdAt: { type: Date, required: true, default: Date.now() }
});

const diagnostico = mongoose.model("diagnosticos", diagnosticoSchema);

module.exports = diagnostico;