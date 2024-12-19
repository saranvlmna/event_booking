import connection from "../connection.js";

const createTableQuery = `CREATE TABLE IF NOT EXISTS events (
    id CHAR(36) NOT NULL PRIMARY KEY,  
    event_id CHAR(36),                 
    user_id CHAR(36),                  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    CONSTRAINT unique_event_user UNIQUE (event_id, user_id) 
);`;

connection.query(createTableQuery, (err, results) => {
  if (err) {
    console.error("Error creating table:", err);
  } else {
    console.log("Event booking Table created successfully:", results);
  }
  connection.end();
});
