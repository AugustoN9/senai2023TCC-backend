const mongoose = require("mongoose");

const CategoriaExameSchema = new mongoose.Schema({
    nome: {
        type: String, unique: true, requered: true
    },
    numero: {
        type: Number, unique: true, requered: true
    },
    sigla: {
        type: String, requered: true
    },
    createdAt: { type: Date, required: true, default: Date.now() },
});

const CategoriaExame = mongoose.model("categoriaExames", CategoriaExameSchema);

module.exports = CategoriaExame;