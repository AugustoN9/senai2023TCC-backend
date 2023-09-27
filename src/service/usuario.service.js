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

// const addUserExameService = (id, exame) => {
//     return Usuario.findOneAndUpdate(
//         {
//             _id: id,
//         },
//         {
//             $push: {
//                 exames: {
//                     _id: exame._id,
//                 }
//             }
//         },
//         {
//             rawResult: true,
//         }
//     )
// };

// const removeUserExameService = (id, exame) => {
//     return Usuario.findOneAndUpdate(
//         {
//             _id: id,
//         },
//         {
//             $pull: {
//                 exames: {
//                     _id: exame._id,
//                 }
//             }
//         },
//         {
//             rawResult: true,
//         }
//     )

// };

module.exports = {
    findUserByIdService,
    findAllUserService,
    createUserService,
    updateUserService,
    removeUserService,
    //addUserExameService,
    //removeUserExameService
}