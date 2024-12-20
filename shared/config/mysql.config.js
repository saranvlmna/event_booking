import mysql from "mysql2";
import config from "./index.js";

const connection = mysql.createConnection(config.db);

connection.connect((error) => {
  if (error) {
    console.error("error connecting to MySQL: " + error.stack);
    return;
  }
  console.log(`connected to MySQL ${config.db.host}:${config.db.port}`);
});

export default connection;
