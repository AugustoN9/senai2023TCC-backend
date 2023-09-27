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

// const addMedicoExameService = (id, medico) => {
//     return Exame.findOneAndUpdate(
//         {
//             _id: id,
//         },
//         {
//             $push: {
//                 medicos: {
//                     _id: medico._id,
//                 }
//             }
//         },
//         {
//             rawResult: true,
//         }
//     )
// };

// const removeMedicoExameService = (id, medico) => {
//     return Exame.findOneAndUpdate(
//         {
//             _id: id,
//         },
//         {
//             $pull: {
//                 medicos: {
//                     _id: medico._id,
//                 }
//             }
//         },
//         {
//             rawResult: true,
//         }
//     )
// };

const addPacienteExameService = (id, paciente) => {
    return Exame.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                pacientes: {
                    _id: paciente._id,
                }
            }
        },
        {
            rawResult: true,
        }
    )
};

const removePacienteExameService = (id, paciente) => {
    return Exame.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                pacientes: {
                    _id: paciente._id,
                }
            }
        },
        {
            rawResult: true,
        }
    )
};

module.exports = {
    findAllExameService,
    findExameByIdService,
    createExameService,
    updateExameService,
    removeExameService,
    addPacienteExameService,
    removePacienteExameService
}