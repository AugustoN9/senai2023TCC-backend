const express = require("express");
const router = express.Router();
const categoriaExameController = require("../controller/categoriaExame.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.get('/findById/:id', authMiddleware, categoriaExameController.findCategoriaExameByIdController);
router.get('/findAll', authMiddleware, categoriaExameController.findAllCategoriaExameController);

router.post('/create', categoriaExameController.createCategoriaExameController);

router.put('/update/:id', authMiddleware, categoriaExameController.updateCategoriaExameController);

router.delete('/remove/:id', authMiddleware, categoriaExameController.removeCategoriaExameController);


module.exports = router;