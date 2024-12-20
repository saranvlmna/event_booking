import connection from "../config/mysql.config.js";

const create_table_query = `CREATE TABLE IF NOT EXISTS users (
  id CHAR(36) NOT NULL PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL DEFAULT 'USER',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`;

connection.query(create_table_query, (error, result) => {
  if (error) {
    console.error("Error creating table:", error);
  } else {
    console.log("User Table created successfully:", result);
  }
  connection.end();
});
