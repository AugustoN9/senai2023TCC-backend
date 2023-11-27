const mongoose = require("mongoose");

const ContaSchema = new mongoose.Schema({
    user: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref:"users" },
            createdAt: { type: Date, required: true, default: Date.now() }, 
        }
    ],    
    personal: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref:"personals" },
            createdAt: { type: Date, required: true, default: Date.now() }, 
        }
    ],
    profissional: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref:"profissionals" },
            createdAt: { type: Date, required: true, default: Date.now() }, 
        }
    ],
    admin: { type: Boolean, default: false },
    ativo: { type: Boolean, default: false },
     
    createdAt: { type: Date, required: true, default: Date.now() }

});

const Conta = mongoose.model("contas", ContaSchema);

module.exports = Conta;