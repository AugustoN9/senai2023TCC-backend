const express = require("express");
const router = express.Router();
const exameController = require("../controller/exame.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.get('/findById/:id', authMiddleware, exameController.findExameByIdController);
router.get('/findAll', authMiddleware, exameController.findAllExameController);

router.post('/create', authMiddleware, exameController.createExameController);
router.post('/addMedico/:id', authMiddleware, exameController.addMedicoExameController);
router.post('/addPaciente/:id', authMiddleware, exameController.addPacienteExameController);

router.put('/update/:id', authMiddleware, exameController.updateExameController);

router.delete('/remove/:id', authMiddleware, exameController.removeExameController);
router.delete('/removePaciente', authMiddleware, exameController.removePacienteExameController);
router.delete('/removeMedico', authMiddleware, exameController.removeMedicoExameController);

module.exports = router;