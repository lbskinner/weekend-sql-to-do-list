const pg = require("pg");
const Pool = pg.Pool;

const pool = new Pool({
  database: "weekend-to-do-app", // name of database
  host: "localhost",
  port: 5432,
  max: 10, // max 10 connections at once
  idleTimeoutMillis: 30000 // 30 seconds trying to connect
});

pool.on("connect", () => {
  console.log(`Connected to pool!`);
});

pool.on("error", () => {
  console.log(`There was a pool error!`);
});

module.exports = pool;
