const { Pool } = require('pg');

const connectionString =
  'postgres://dbgompmt:Yxle09QnlO_f7ZaqMV1bHuQ_w2MWwcDW@batyr.db.elephantsql.com/dbgompmt';

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
  } finally {
    await pool.end(); // Close the pool when done
  }
})();

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
