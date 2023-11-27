const CategoriaExame = require("../model/CategoriaExame");

const findAllCategoriaExameService = (limit, offset) => {
    return CategoriaExame.find().limit(limit).skip(offset);
};

const findCategoriaExameByIdService = (id) => {
    return CategoriaExame.findById(id);
};

const createCategoriaExameService = (body) => {
    return CategoriaExame.create(body);
};

const updateCategoriaExameService = (id, body) => {
    return CategoriaExame.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeCategoriaExameService = (id) => {
    return CategoriaExame.findByIdAndRemove(id);
}


module.exports = {
    findAllCategoriaExameService,
    findCategoriaExameByIdService,
    createCategoriaExameService,
    updateCategoriaExameService,
    removeCategoriaExameService
}