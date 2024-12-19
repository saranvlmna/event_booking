import connection from "../connection.js";

const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
  id CHAR(36) NOT NULL PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL DEFAULT 'USER',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`;

connection.query(createTableQuery, (err, results) => {
  if (err) {
    console.error("Error creating table:", err);
  } else {
    console.log("User Table created successfully:", results);
  }
  connection.end();
});
