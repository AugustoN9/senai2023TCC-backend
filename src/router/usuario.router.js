const express = require("express");
const router = express.Router();

const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaUsuario, validaEndereco, validaIdParams, valida_IdBody } = require("../middleware/validacao.middleware");

router.get('/findById/:id',authMiddleware, validaIdParams, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, usuarioController.findAllUserController);

router.post('/create',usuarioController.createUserController);
router.post('/addExame/:id', authMiddleware, validaIdParams, valida_IdBody, usuarioController.addUserExameController);

router.put('/update/:id', authMiddleware, validaIdParams, validaUsuario, usuarioController.updateUserController);

router.delete('/remove/:id', authMiddleware, validaIdParams, usuarioController.removeUserController);
router.delete('/removeExame/:id',usuarioController.removeUserExameController)

module.exports = router;