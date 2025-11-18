const usuarioServicio = require('../services/usuarioServicio');

// GET /usuarios → lista todos los usuarios
async function listarUsuarios(req, res, next) {
  try {
    const usuarios = await usuarioServicio.obtenerTodos();
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
}

// GET /usuarios/:id → trae un usuario específico
async function obtenerUsuario(req, res, next) {
  try {
    const usuario = await usuarioServicio.obtenerPorId(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    next(error);
  }
}

// POST /usuarios → crea un usuario nuevo
async function crearUsuario(req, res, next) {
  try {
    const nuevo = await usuarioServicio.crearUsuario(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    next(error);
  }
}

// DELETE /usuarios/:id → elimina un usuario
async function eliminarUsuario(req, res, next) {
  try {
    const eliminado = await usuarioServicio.eliminarUsuario(req.params.id);
    res.json({ mensaje: 'Usuario eliminado', eliminado });
  } catch (error) {
    if (error.message === 'USUARIO_NO_EXISTE') {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else next(error);
  }
}

module.exports = {
  listarUsuarios,
  obtenerUsuario,
  crearUsuario,
  eliminarUsuario
};
