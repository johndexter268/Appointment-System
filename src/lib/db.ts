import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'hiv_appointments',
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0
});

export default pool; 