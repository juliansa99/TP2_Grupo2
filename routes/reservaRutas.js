const express = require('express');
const router = express.Router();
const validarReserva = require('../middlewares/validarReserva');
const reservaControlador = require('../controller/reservaControlador');

// Crear reserva (con validación de body)
router.post('/', validarReserva, reservaControlador.crearReserva);

// (Opcional) listar reservas de una clase
router.get('/clase/:idClase', reservaControlador.listarPorClase);

module.exports = router;
