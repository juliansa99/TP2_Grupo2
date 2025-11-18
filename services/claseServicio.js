// Habla con la base de datos usando Sequelize
const { Clase } = require('../models'); 
// Asume que existe un modelo 'Clase'

/**
 * Trae todas las clases de la base de datos.
 * @returns {Promise<Array<Clase>>} Un array de objetos Clase.
 */
async function obtenerTodas() {
  return await Clase.findAll();
}

/**
 * Trae una clase por su ID
 * @param {number} id - El ID de la clase.
 * @returns {Promise<Clase | null>} El objeto Clase o null si no se encuentra.
 */
async function obtenerPorId(id) {
  return await Clase.findByPk(id);
}

/**
 * Crea una nueva clase
 * @param {object} datos - Los datos de la nueva clase (ej: nombre, horario, cupo).
 * @returns {Promise<Clase>} El objeto Clase creado.
 */
async function crearClase(datos) {
  // Aquí se podrían agregar validaciones de negocio antes de crear
  return await Clase.create(datos);
}

/**
 * Actualiza una clase que ya existe
 * @param {number} id - El ID de la clase a actualizar.
 * @param {object} datos - Los nuevos datos para la clase.
 * @returns {Promise<[number, Array<Clase>]>} Un array: [número de filas afectadas, datos de la clase actualizada].
 */
async function actualizarClase(id, datos) {
  // Retorna [1, [clase_actualizada]] si tiene éxito, [0, []] si no se encuentra el ID
  return await Clase.update(datos, {
    where: { id: id }
  });
}

/**
 * Elimina una clase por su ID
 * @param {number} id - El ID de la clase a eliminar.
 * @returns {Promise<number>} El número de filas eliminadas (1 si se eliminó, 0 si no se encontró).
 */
async function eliminarClase(id) {
  return await Clase.destroy({
    where: { id: id }
  });
}

module.exports = {
  obtenerTodas,
  obtenerPorId,
  crearClase,
  actualizarClase,
  eliminarClase
};