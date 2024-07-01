const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "123456789",
  host: "localhost",
  port: 5432,
  database: "tasksdb",
});

module.exports = pool;
