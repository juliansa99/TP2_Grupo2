//Habla con la base de datos usando Sequelize
const { Usuario } = require('../models');

async function obtenerTodos() {
  return await Usuario.findAll();
}

async function obtenerPorId(id) {
  return await Usuario.findByPk(id);
}

async function crearUsuario(datos) {
  return await Usuario.create({
    nombre: datos.nombre,
    email: datos.email,
    telefono: datos.telefono
  });
}

async function eliminarUsuario(id) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) throw new Error('USUARIO_NO_EXISTE');
  await usuario.destroy();
  return usuario;
}

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crearUsuario,
  eliminarUsuario
};
