// const db = require('./database')
import db from './database.js';


async function testConnection() {
    try {
        const [rows] = await db.query('SELECT NOW() AS currentTime');
        console.log('Database connection successful. Current time:', rows[0].currentTime);
        console.log('row:', rows[0]);
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

testConnection();