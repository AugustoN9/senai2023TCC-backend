const mongoose = require("mongoose");

const laudoSchema = new mongoose.Schema({
    // Exame: [
    //     {
    //         _id: { type: mongoose.Schema.Types.ObjectId, unique: true, ref: "exames" },
    //         createAt: { type: Date, required: true, default: Date.now() },
    //     }
    // ],
    exame: { type: String, required: true },
    macroscopia: { type: String, required: true },
    microscopia: { type: String, required: true },
    diagnostico: { type: String, required: true },


    createdAt: { type: Date, required: true, default: Date.now() }
});

const Laudo = mongoose.model("laudos", laudoSchema);

module.exports = Laudo;