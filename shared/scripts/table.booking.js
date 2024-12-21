import connection from "../config/mysql.config.js";

const create_table_query = `CREATE TABLE IF NOT EXISTS eventbooking (
    id CHAR(36) NOT NULL PRIMARY KEY DEFAULT (UUID()),
    event_code CHAR(36) NOT NULL,                 
    user_id CHAR(36) NOT NULL,                  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    CONSTRAINT unique_event_user UNIQUE (event_code, user_id),
    CONSTRAINT fk_event_code FOREIGN KEY (event_code) REFERENCES events(code) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);`;

connection.query(create_table_query, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Event Table created successfully:", result);
  }
  connection.end();
});
