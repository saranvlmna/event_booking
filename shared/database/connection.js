import mysql from "mysql2";

const connection = mysql.createConnection({
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_DATABASE,
  // port: process.env.DB_PORT,

  host: "localhost",
  user: "vlmna",
  password: "vlmna@4578",
  database: "eventsmanager",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as ID eventsmanager");
});

export default connection;
