const reservaServicio = require('../services/reservaServicio');

async function crearReserva(req, res, next) {
  try {
    const { idUsuario, idClase } = req.body;
    const reserva = await reservaServicio.crearReserva({ idUsuario, idClase });
    return res.status(201).json(reserva);
  } catch (err) {
    if (err.tipo === 'CLASE_NO_EXISTE' || err.tipo === 'SIN_CUPO') {
      return res.status(400).json({ error: err.message });
    }
    next(err);
  }
}

// (Opcional) GET /reservas/clase/:idClase
async function listarPorClase(req, res, next) {
  try {
    const { idClase } = req.params;
    const reservas = await reservaServicio.listarPorClase(idClase);
    return res.json(reservas);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  crearReserva,
  listarPorClase
};
