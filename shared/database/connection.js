import mysql from "mysql2";
import config from "../config/config.js";

const connection = mysql.createConnection(config.db);

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL: " + error.stack);
    return;
  }
  console.log(`Connected to MySQL as ${config.db.database}`);
});

export default connection;
