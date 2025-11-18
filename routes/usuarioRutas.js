const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controller/usuarioControlador');

// TEST
router.get('/test', (req, res) => {
  res.send('✅ RUTA DE USUARIOS FUNCIONA');
});

// CRUD
router.get('/', usuarioControlador.listarUsuarios);
router.get('/:id', usuarioControlador.obtenerUsuario);
router.post('/', usuarioControlador.crearUsuario);
router.delete('/:id', usuarioControlador.eliminarUsuario);

module.exports = router;


