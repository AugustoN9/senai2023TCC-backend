const express = require("express");
const router = express.Router();
const laudoController = require("../controller/laudo.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.get('/findById/:id', authMiddleware, laudoController.findLaudoByIdController);
router.get('/findAll', authMiddleware, laudoController.findAllLaudoController);

router.post('/create', authMiddleware, laudoController.createLaudoController);

router.put('/update/:id', authMiddleware, laudoController.updateLaudoController);

router.delete('/remove/:id', authMiddleware, laudoController.removeLaudoController);

module.exports = router;