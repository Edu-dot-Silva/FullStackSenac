import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexão bem-sucedida ao banco de dados!');
    connection.release();
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  }
};

testConnection();

export default pool;