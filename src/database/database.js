const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect(process.env.URLDATABASEATLAS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4,
    }).then(() => {
        console.log("MongoDB CONECTADO COM SUCESSO!");
    }).catch((err) => {
        return console.log(`Erro na conexão com o banco: ${err}`);
    })
}

module.exports = connectToDatabase;