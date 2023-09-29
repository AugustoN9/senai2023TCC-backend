const express = require("express");
require("dotenv").config();
const cors = require("cors");
const authService = require("./src/service/auth.service");
const jwt = require("jsonwebtoken");

const connectToDatabase = require("./src/database/database");

const usuario = require("./src/router/usuario.router");
const auth = require("./src/router/auth.router");

const medico = require("./src/router/medico.router");
const paciente = require("./src/router/paciente.router");
const exame = require("./src/router/exame.router");

const app = express();
//const port = 3007;
const port = 3000;

const corsOptions = {
    optionsSuccessStatus: 200, // For legacy browser support
    credentials: true, // This is important.
    origin: "https://senai2023-tcc-frontend.vercel.app/",
};

app.use(cors(corsOptions));

app.use(express.json());

// app.use(cors(
//     {
//         origin: "https://senai2023-tcc-frontend.vercel.app/",
//         methods:["GET", "POST", "PUT", "PATCH", "DELETE"]
//     }
// ));

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "https://senai2023-tcc-frontend.vercel.app/");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     app.use(cors());
//     next();
// });


app.post("/login", async (req, res ) => {
    try{
        const { email, senha } = req.body;
        const user = await authService.loginService(email);

        if(!user){
            return res.status(400).send({ message: "Usuário não encontrado, tente novamente!"});
        }

        if(senha != user.senha){
            return res.status(400).send({ message: "senha inválida!"});
        }

        const token = authService.generaToken(user, secret);
        res.status(200).send({
            user,
            token
        })
    }
    catch(err){
        console.log(`Erro: ${err}`);
    }
})

app.get("/teste-token", (req,res) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send({ message: "O token não foi informado!"});
    }
    const parts = authHeader.split(" ");

    if(parts.length !== 2){
        return res.status(401).send({ message: "O token invalido!"});
    }    
    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({ message: "O token malformatado!"});
    }

    jwt.verify(token, secret, async (err, decoded) => {
        console.log(decoded.id);
        res.send(decoded);
    });
})

connectToDatabase();

app.use("/usuario", usuario);
app.use("/auth", auth);

app.use("/medico", medico);
app.use("/paciente", paciente);
app.use("/exame", exame);

app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo ao nosso sistema Exacta Patho"
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})
