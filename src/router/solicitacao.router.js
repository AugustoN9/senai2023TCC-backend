const express = require("express");
const router = express.Router();
const solicitaController = require("../controller/solicitacao.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.get('/findById/:id', authMiddleware, solicitaController.findSolicitacaoByIdController);
router.get('/findAll', authMiddleware, solicitaController.findAllSolicitacaoController);

router.post('/create', authMiddleware, solicitaController.createSolicitacaoController);

router.put('/update/:id', authMiddleware, solicitaController.updateSolicitacaoController);

router.delete('/remove/:id', authMiddleware, solicitaController.removeSolicitacaoController);

module.exports = router;