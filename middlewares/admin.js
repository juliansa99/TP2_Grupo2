const usuarioServicio = require('../services/usuarioServicio');

async function esAdmin(req, res, next) {
  try {
    const usuario = await usuarioServicio.obtenerPorId(req.params.adminId);

    if (!usuario) {
      return res.status(404).json({
        error: 'El administrador no existe en la base de datos.'
      });
    }

    if (usuario.isAdmin !== true) {
      return res.status(403).json({
        error: 'Acceso denegado. Solo los administradores pueden realizar esta acción.'
      });
    }

    next();

  } catch (error) {
    next(error);
  }
}

module.exports = esAdmin;

