const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // Corrected the host value
  database: 'todo_list',
  password: 'system',
  port: 5432,
});

module.exports = pool;
