const express = require("express");
const router = express.Router();
const exameController = require("../controller/exame.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.get('/findById/:id', authMiddleware, exameController.findExameByIdController);
router.get('/findAll', authMiddleware, exameController.findAllExameController);

router.post('/create', authMiddleware, exameController.createExameController);

router.put('/update/:id', authMiddleware, exameController.updateExameController);

router.delete('/remove/:id', authMiddleware, exameController.removeExameController);

module.exports = router;