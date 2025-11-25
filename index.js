const express = require('express');
const { sequelize } = require('./models'); 

// Importar rutas
const usuarioRutas = require('./routes/usuarioRutas');
const reservaRutas = require('./routes/reservaRutas');
const claseRutas = require('./routes/claseRutas');

const app = express();
const PORT = 3000;

// Middlewares globales
app.use(express.json());

// Rutas

// Ruta de prueba
app.get('/ping', (req, res) => {
  res.json({ mensaje: 'pong 🏓' });
});

app.use('/usuarios', usuarioRutas);
app.use('/reservas', reservaRutas);
app.use('/clases', claseRutas);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// ----------------------------
// Conexión DB y servidor
// ----------------------------
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado a MySQL correctamente');
    // Si querés que altere la estructura según los modelos:
    // return sequelize.sync({ alter: true });
    return sequelize.sync();
  })
  .then(() => {
    console.log('✅ Modelos sincronizados con la base de datos');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error al conectar o sincronizar la base de datos:', err);
  });
