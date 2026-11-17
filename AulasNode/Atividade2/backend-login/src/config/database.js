import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: process.env.DB_SERVER || 'localhost',
  port: Number(process.env.DB_PORT || 1433),
  database: process.env.DB_NAME || 'sistema_login',
  user: process.env.DB_USER || 'Eduardo',
  password: process.env.DB_PASSWORD || 'Edu123456!',
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true
  }
};

const pool = new sql.ConnectionPool(config);

export async function connectDB() {
  try {
    if (!pool.connected) {
      await pool.connect();
    }
    return pool;
  } catch (error) {
    console.error('Erro ao conectar ao SQL Server:', error);
    throw error;
  }
}

export default pool;