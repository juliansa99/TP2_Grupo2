//Traigo de Sequelize la parte que me deja definir los tipos de datos
const { DataTypes } = require('sequelize');
//Traigo la conexión a la base de datos
const sequelize = require('../connection/db'); 

const Usuario = require('./Usuario')(sequelize, DataTypes);
const Clase = require('./Clase')(sequelize, DataTypes);
const Reserva = require('./Reserva')(sequelize, DataTypes);

// Un usuario tiene muchas reservas
Usuario.hasMany(Reserva, {
  foreignKey: 'idUsuario',
  as: 'reservas'
});

// Una clase tiene muchas reservas
Clase.hasMany(Reserva, {
  foreignKey: 'idClase',
  as: 'reservas'
});

// Una reserva pertenece a un usuario
Reserva.belongsTo(Usuario, {
  foreignKey: 'idUsuario',
  as: 'usuario'
});

// Una reserva pertenece a una clase
Reserva.belongsTo(Clase, {
  foreignKey: 'idClase',
  as: 'clase'
});

module.exports = {
  sequelize,
  Usuario,
  Clase,
  Reserva
};
