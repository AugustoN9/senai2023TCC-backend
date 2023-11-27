const mongoose = require("mongoose");

const macroscopiaSchema = new mongoose.Schema({
    numeroExame: { type: Number, unique: true, required: true },
    patologista: { type: String, required: true },
    descricaoMacroscopica: { type: String, required: false },
    macroscopiaStatus: { type: String, required: false, default: "Aguardando Validacao" },

    createdAt: { type: Date, required: true, default: Date.now() }
});

const macroscopia = mongoose.model("macroscopias", macroscopiaSchema);

module.exports = macroscopia;