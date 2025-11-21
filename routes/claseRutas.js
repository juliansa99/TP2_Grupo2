const express = require('express');
const router = express.Router();
const claseControlador = require('../controller/claseControlador');
const esAdmin = require('../middlewares/admin');

// TEST
router.get('/test', (req, res) => {
  res.send('✅ RUTA DE CLASES FUNCIONA');
});

router.get('/', claseControlador.listarClases); // GET /clases
router.get('/:id', claseControlador.obtenerClase); // GET /clases/:id

router.post('/:adminId', esAdmin, claseControlador.crearClase); // POST /clases/:adminId
router.put('/:id/:adminId', esAdmin, claseControlador.actualizarClase); // PUT /clases/:id/:adminId
router.delete('/:id/:adminId', esAdmin, claseControlador.eliminarClase); // DELETE /clases/:id/:adminId

module.exports = router;