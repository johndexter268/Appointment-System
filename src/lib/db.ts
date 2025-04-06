import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'hiv-appointments',
  waitForConnections: true,
  connectionLimit: 200,
  queueLimit: 0
});

export default pool; 