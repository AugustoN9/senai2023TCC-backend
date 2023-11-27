const mongoose = require("mongoose");

const microscopiaSchema = new mongoose.Schema({
    numeroExame: { type: Number, unique: true, required: true },
    patologista: { type: String, required: true },
    descricaoMicroscopica: { type: String, required: false },
    microscopiaStatus: { type: String, required: false, default: "Aguardando Validacao" },

    createdAt: { type: Date, required: true, default: Date.now() }
});

const microscopia = mongoose.model("microscopias", microscopiaSchema);

module.exports = microscopia;