require('dotenv').config();

const { Pool } = require('pg');

const connectionString = process.env.postgres_URI;

const pool = new Pool({
  connectionString,
});

(async () => {
  try {
    const client = await pool.connect();
    console.log('Database connection successful');
    client.release();
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
})();

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
