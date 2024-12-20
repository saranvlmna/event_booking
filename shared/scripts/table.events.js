import connection from "../config/mysql.config.js";

const create_table_query = `CREATE TABLE IF NOT EXISTS events (
    id CHAR(36) NOT NULL PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(255) NOT NULL,
    code VARCHAR(255) NOT NULL,
    capacity INT NOT NULL,
    is_expired BOOLEAN DEFAULT false NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`;

connection.query(create_table_query, (error, result) => {
  if (error) {
    console.error("Error creating table:", err);
  } else {
    console.log("Event Table created successfully:", result);
  }
  connection.end();
});
