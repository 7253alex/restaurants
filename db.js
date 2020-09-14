const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "sdf2810",
  host: "localhost",
  database: "restaurantforum",
  port: 5432
})

module.exports = pool;
