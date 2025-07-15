const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const connectDB = async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('Connected to PostgreSQL');
  } catch (err) {
    console.error('Database connection failed', err);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };
