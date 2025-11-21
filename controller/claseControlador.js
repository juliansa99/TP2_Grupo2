const claseServicio = require('../services/claseServicio');

// GET /clases --> lista todas las clases
async function listarClases(req, res, next) {
  try {
    const clases = await claseServicio.obtenerTodas();
    res.json(clases);
  } catch (error) {
    next(error);
  }
}

// GET /clases/:id --> trae una clase específica
async function obtenerClase(req, res, next) {
  try {
    const clase = await claseServicio.obtenerPorId(req.params.id);
    if (!clase) {
      return res.status(404).json({ error: 'Clase no encontrada' });
    }
    res.json(clase);
  } catch (error) {
    next(error);
  }
}

// POST /clases --> crea una clase nueva
async function crearClase(req, res, next) {
  try {
    const nuevaClase = await claseServicio.crearClase(req.body);
    res.status(201).json(nuevaClase); 
  } catch (error) {
//if (error.errors && error.errors[0].validatorName === 'isDate') {
//return res.status(400).json({ error: 'La fecha proporcionada no es válida.' });
//}
    next(error);
  }
}

// PUT /clases/:id --> actualiza una clase existente
async function actualizarClase(req, res, next) {
  try {
    const [filasAfectadas] = await claseServicio.actualizarClase(req.params.id, req.body);

    if (filasAfectadas === 0) {
      return res.status(404).json({ error: 'Clase no encontrada para actualizar' });
    }

    // Opcional: devuelve el objeto actualizado
    const claseActualizada = await claseServicio.obtenerPorId(req.params.id);
    res.json(claseActualizada);

  } catch (error) {
    next(error);
  }
}

// DELETE /clases/:id --> elimina una clase
async function eliminarClase(req, res, next) {
  try {
    const filasAfectadas = await claseServicio.eliminarClase(req.params.id);

    if (filasAfectadas === 0) {
      return res.status(404).json({ error: 'Clase no encontrada para eliminar' });
    }

    // 204 No Content (Éxito sin devolver contenido)
    res.status(204).send(); 
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listarClases,
  obtenerClase,
  crearClase,
  actualizarClase,
  eliminarClase
};