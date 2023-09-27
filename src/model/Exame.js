const mongoose = require("mongoose");

const ExameSchema = new mongoose.Schema({
    categoria: { type: String, required: true },
    topologia: { type: String, required: true },
    local_origem: { type: String, required: true },
    historico_clinico: { type: String, required: true },
    quantidade: { type: Number, required: true, default: "1" },
    nivel_urgencia: { type: String, required: true, default: "normal" },
    paciente: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref:"pacientes" },
            createdAt: { type: Date, required: true, default: Date.now() }, 
        }
    ],
    // medico: [
    //     {
    //         _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref:"medicos" },
    //         createdAt: { type: Date, required: true, default: Date.now() }, 
    //     }
    // ],
    createdAt: { type: Date, required: true, default: Date.now() }

});

const Exame = mongoose.model("exames", ExameSchema);

module.exports = Exame;