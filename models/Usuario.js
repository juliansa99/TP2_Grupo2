module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      // VALIDACION NOMBRE
      validate: {
        notEmpty: {
          msg: "El nombre no puede estar vacío"
        },
        len: {
          args: [2, 100],
          msg: "El nombre debe tener entre 2 y 100 caracteres"
        }
      }
      //----------------------
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // VALIDACION EMAIL
      unique: {
        msg: "Este email ya está registrado"
      },
      validate: {
        notEmpty: {
          msg: "El email es obligatorio"
        },
        isEmail: {
          msg: "Debe ser un email válido"
        }
      }
      //--------------------
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
      // VALIDACION TELEFONO
      validate: {
        is: {
          msg: "El teléfono solo puede contener números"
        }
      }
      //---------------------
    }
  }, {
    tableName: 'usuarios',
    timestamps: false
  });

  return Usuario;
};
