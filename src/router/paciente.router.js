const express = require("express");
const router = express.Router();
const pacienteController = require("../controller/paciente.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.get('/findById/:id',authMiddleware, pacienteController.findPacienteByIdController);
router.get('/findAll',pacienteController.findAllPacienteController);

router.post('/create',pacienteController.createPacienteController);

router.put('/update/:id',pacienteController.updatePacienteController);

router.delete('/remove/:id',pacienteController.removePacienteController);

module.exports = router;