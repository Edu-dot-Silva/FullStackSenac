import db, { connectDB } from './database.js';

async function testConnection() {
  try {
    const pool = await connectDB();
    const result = await pool.request().query('SELECT GETDATE() AS currentTime');
    console.log('Database connection successful. Current time:', result.recordset[0].currentTime);
    console.log('row:', result.recordset[0]);
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

testConnection();