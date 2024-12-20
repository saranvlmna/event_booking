import mysql from "mysql2";
import config from "../config/index.js";

const connection = mysql.createConnection(config.db);

connection.connect((error) => {
  if (error) {
    console.error("error connecting to MySQL: " + error.stack);
    return;
  }
  console.log(`connected to MySQL as ${config.db.database}`);
});

export default connection;
