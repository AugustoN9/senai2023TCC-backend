const express = require("express");
const router = express.Router();

const medicoController = require("../controller/medico.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get('/findById/:id',authMiddleware, medicoController.findMedicoByIdController);
router.get('/findAll',authMiddleware, medicoController.findAllMedicoController);

router.post('/create',authMiddleware, medicoController.createMedicoController);

router.put('/update/:id', authMiddleware, medicoController.updateMedicoController);

router.delete('/remove/:id', authMiddleware, medicoController.removeMedicoController);

module.exports = router;