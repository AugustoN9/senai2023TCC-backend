const Usuario = require("../model/Usuario");

const findAllUserService = (limit, offset) => {
    return Usuario.find().limit(limit).skip(offset);
};

const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

const createUserService = (body) => {
    return Usuario.create(body);
};

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id);
};

module.exports = {
    findUserByIdService,
    findAllUserService,
    createUserService,
    updateUserService,
    removeUserService
}