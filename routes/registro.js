const express = require('express');
const router = express.Router();

// Importa el controlador
const registroController = require('../controllers/registroController');

// Ruta POST para registrar cliente
router.post('/', registroController.registrarCliente);

module.exports = router;
