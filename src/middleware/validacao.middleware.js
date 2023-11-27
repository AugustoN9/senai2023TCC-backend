const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId;

const validaUsuario = (req, res, next) => {
    /*
    if (!req.body.nome) {
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!` });
    }
    if (!req.body.email) {
        return res.status(400).send({ message: `O campo 'email' precisa ser preenchido!` });
    }
    if (!req.body.senha) {
        return res.status(400).send({ message: `O campo 'senha' precisa ser preenchido!` });
    }
    if (!req.body.imagem) {
        return res.status(400).send({ message: `O campo 'imagem' precisa ser preenchido!` });
    }
    if (!req.body.admin) {
        return res.status(400).send({ message: `O campo 'senha' precisa ser preenchido!` });
    }

    return next();
    */
    let erros = [];
    if (!req.body.nome) {
        erros.push("nome");
    }
    if (erros.length == 0) {
        return next();
    }
    else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        }
        else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido! linha 36` });
        }
    }
}

const validaEndereco = (req, res, next) => {
    let erros = [];

    req.body.map((value, key) => {
        if (!value.logradouro) {
            erros.push(`'${key + 1}' - logradouro`);
        }
        if (!value.nome) {
            erros.push(`'${key + 1}' - nome`);
        }
        if (!value.numero) {
            erros.push(`'${key + 1}' - numero`);
        }
        if (!value.complemento) {
            erros.push(`'${key + 1}' - complemento`);
        }
        if (!value.CEP) {
            erros.push(`'${key + 1}' - CEP`);
        }
    });

    if (erros.length == 0) {
        return next();
    }
    else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        }
        else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }
}

const validaProduto = (req, res, next) => {
    let erros = [];
    if (!req.body.nome) {
        erros.push("nome");
    }
    if (!req.body.descricao) {
        erros.push("descricao");
    }
    if (!req.body.precoUnitario) {
        erros.push("precoUnitario");
    }
    if (!req.body.imagem) {
        erros.push("imagem");
    }
    if (!req.body.codigoBarra) {
        erros.push("codigoBarra");
    }

    if (erros.length == 0) {
        return next();
    }
    else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        }
        else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }
}

const validaCategoria = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!` });
    }
    return next();
}

const validaSabores = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!` });
    }
    return next();
}

const validaPedido = (req, res, next) => {
    let erros = [];
    if (!req.body.precoTotal) {
        erros.push("precoTotal");
    }
    if (!req.body.frete) {
        erros.push("frete");
    }
    if (req.body.concluido == undefined) {
        erros.push("concluido");
    }

    if (erros.length == 0) {
        return next();
    }
    else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        }
        else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }
}

const validaCarrinho = (req, res, next) => {
    let erros = [];
    if (!req.body.precoTotal) {
        erros.push("precoTotal");
    }
    if (!req.body.frete) {
        erros.push("frete");
    }

    if (erros.length == 0) {
        return next();
    }
    else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        }
        else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }
}

const validaIdParams = (req, res, next) => {
    if (ObjectId.isValid(req.params.id)) {
        return next();
    }
    else {
        return res.status(400).send({ message: `O ID não corresponde aos padrões necessarios.` });
    }
}

const valida_IdBody = (req, res, next) => {
    if (ObjectId.isValid(req.body._id)) {
        return next();
    }
    else {
        return res.status(400).send({ message: `O ID não corresponde aos padrões necessarios.` });
    }
}

const validaLogin = (req, res, next) => {
    let erros = [];

    if (!req.body.email) {
        erros.push("email");
    }
    if (!req.body.senha) {
        erros.push("senha");
    }
    if (erros.length == 0) {
        return next();
    }
    else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        }
        else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }
}


const validaProdutoCarrinhoPedido = (req, res, next) => {
    let erros = [];

    req.body.produtos.map((value, key) => {
        if (!value._id) {
            erros.push(`'${key + 1} - _id'`);
        }
        if (!ObjectId.isValid(value._id)) {
            erros.push(`'${key + 1} - _id - tipo invalido! '`);
        }
        if (!value.quantidade) {
            erros.push(`'${key + 1} - quantidade '`);
        }
    });

    if (erros.length == 0) {
        return next();
    }
    else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!` });
        }
        else {
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!` });
        }
    }
}


module.exports = {
    validaUsuario,
    validaEndereco,
    validaProduto,
    validaCategoria,
    validaSabores,
    validaPedido,
    validaCarrinho,
    validaIdParams,
    valida_IdBody,
    validaLogin,
    validaProdutoCarrinhoPedido
};
