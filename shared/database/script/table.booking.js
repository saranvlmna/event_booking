import connection from "../connection.js";

const createTableQuery = `CREATE TABLE IF NOT EXISTS eventbooking (
    id CHAR(36) NOT NULL PRIMARY KEY DEFAULT (UUID()),
    event_code CHAR(36),                 
    user_id CHAR(36),                  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    CONSTRAINT unique_event_user UNIQUE (event_code, user_id) 
);`;

connection.query(createTableQuery, (err, results) => {
  if (err) {
    console.error("Error creating table:", err);
  } else {
    console.log("Event booking Table created successfully:", results);
  }
  connection.end();
});
