
import app from './app.js';
import sequelize from './config/database.js';
import './models/recurso.model.js';

// Puerto donde funcionará el servidor
const PORT = process.env.PORT || 3000;

// Comprobamos la conexión con PostgreSQL
async function iniciarServidor() {
  try {
     await sequelize.authenticate();
     console.log('Conexión a PostgreSQL establecida');

     await sequelize.sync();
     console.log('Tablas sincronizadas');

     
    // Encendemos el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar con PostgreSQL:', error.message);
  }
}

iniciarServidor();
