function validarReserva(req, res, next) {
  const { idUsuario, idClase } = req.body;

  if (!idUsuario || !idClase) {
    return res.status(400).json({
      error: 'Faltan datos obligatorios: idUsuario e idClase'
    });
  }

  next();
}

module.exports = validarReserva;
