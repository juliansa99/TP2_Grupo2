const { Clase, Reserva } = require('../models');

async function crearReserva({ idUsuario, idClase }) {
  // Traer la clase con sus reservas actuales
  const clase = await Clase.findByPk(idClase, {
    include: [{ model: Reserva, as: 'reservas' }]
  });

  if (!clase) {
    const error = new Error('La clase no existe');
    error.tipo = 'CLASE_NO_EXISTE';
    throw error;
  }

  const reservasActuales = clase.reservas.length;

  if (reservasActuales >= clase.capacidad) {
    const error = new Error('No hay cupos disponibles para esta clase');
    error.tipo = 'SIN_CUPO';
    throw error;
  }

  // Crear la reserva
  const reserva = await Reserva.create({
    idUsuario,
    idClase,
    estado: 'confirmada'
  });

  return reserva;
}

// (Opcional) listar reservas por clase – útil para probar
async function listarPorClase(idClase) {
  return await Reserva.findAll({
    where: { idClase },
    include: [
      { association: 'usuario' },
      { association: 'clase' }
    ]
  });
}

module.exports = {
  crearReserva,
  listarPorClase
};
