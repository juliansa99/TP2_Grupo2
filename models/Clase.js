module.exports = (sequelize, DataTypes) => {
  const Clase = sequelize.define('Clase', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
       // VALIDACIÓN NOMBRE
      validate: {
        notEmpty: {
          msg: "El nombre no puede estar vacío"
        },
        len: {
          args: [2, 100],
          msg: "El nombre debe tener entre 2 y 100 caracteres"
        }
      }
      //----------------
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
       // VALIDACIÓN FECHA
      validate: {
        isDate: {
          msg: "La fecha debe tener un formato válido (YYYY-MM-DD)"
        }
      }
      //----------------
    },
    hora: {
      type: DataTypes.STRING,
      allowNull: false,
      // VALIDACIÓN HORA
      validate: {
        notEmpty: {
          msg: "La hora es obligatoria"
        }
      }
      //----------------
    },
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // VALIDACIÓN CAPACIDAD
      validate: {
        isInt: {
          msg: "La capacidad debe ser un número entero"
        },
        min: {
          args: [1],
          msg: "La capacidad mínima es 1"
        }
      }
      //----------------
    }
  }, {
    tableName: 'clases',
    timestamps: false
  });

  return Clase;
};
