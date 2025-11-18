module.exports = (sequelize, DataTypes) => {
  const Reserva = sequelize.define('Reserva', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // VALIDACION USUARIO
      validate: {
        isInt: {
          msg: "El idUsuario debe ser un número entero"
        },
        min: {
          args: [1],
          msg: "El idUsuario debe ser mayor o igual a 1"
        }
      }
      //------------------
    },
    idClase: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // VALIDACION CLASE
      validate: {
        isInt: {
          msg: "El idClase debe ser un número entero"
        },
        min: {
          args: [1],
          msg: "El idClase debe ser mayor o igual a 1"
        }
      }
      //--------------------
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: true,
      // VALIDACION ESTADO
      validate: {
        isIn: {
          args: [['confirmada', 'cancelada']],
          msg: "El estado debe ser confirmada o cancelada"
        }
      }
      //----------------------
    }
  }, {
    tableName: 'reservas',
    timestamps: false
  });

  return Reserva;
};
