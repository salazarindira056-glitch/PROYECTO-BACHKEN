
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// Cargamos los datos del archivo .env
dotenv.config({ quiet: true });

// Configuramos la conexión con PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
  }
);

// Exportamos la conexión para utilizarla en el proyecto
export default sequelize;
