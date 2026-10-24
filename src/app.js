
import express from 'express';
import recursosRoutes from './routes/recursos.routes.js';

// Creamos la aplicación del servidor
const app = express();

// Permitimos recibir datos en formato JSON
app.use(express.json());

// Ruta principal para comprobar que funciona
app.get('/', (req, res) => {
  res.status(200).json({
    mensaje: 'API de SENA Reservas funcionando correctamente',
  });
});

// Conectamos las rutas de los recursos
app.use('/api/recursos', recursosRoutes);

// Exportamos la aplicación para usarla en server.js
export default app;
