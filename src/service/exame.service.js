const Exame = require("../model/Exame");

const findAllExameService = (limit, offset) => {
    return Exame.find().limit(limit).skip(offset);
};

const findExameByIdService = (id) => {
    return Exame.findById(id);
};

const createExameService = (body) => {
    return Exame.create(body);
};

const updateExameService = (id, body) => {
    return Exame.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeExameService = (id) => {
    return Exame.findByIdAndRemove(id);
}


module.exports = {
    findAllExameService,
    findExameByIdService,
    createExameService,
    updateExameService,
    removeExameService
}