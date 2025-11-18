const express = require('express');
const router = express.Router();
const claseControlador = require('../controller/claseControlador');

// TEST
router.get('/test', (req, res) => {
  res.send('✅ RUTA DE CLASES FUNCIONA');
});

// CRUD Endpoints para Clases
router.get('/', claseControlador.listarClases);        // GET /clases
router.get('/:id', claseControlador.obtenerClase);     // GET /clases/:id
router.post('/', claseControlador.crearClase);         // POST /clases
router.put('/:id', claseControlador.actualizarClase);  // PUT /clases/:id
router.delete('/:id', claseControlador.eliminarClase); // DELETE /clases/:id

module.exports = router;