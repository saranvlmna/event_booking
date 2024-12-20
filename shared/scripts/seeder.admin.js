import connection from "../config/mysql.config.js";

const seed_admin_query = `INSERT INTO users (name, email, password, type)
VALUES ('admin', 'admin@gmail.com', '5400195eb0e7041240956542797c99d6a1601c48c844af52e820a2bad6f571a4', 'ADMIN');`;

connection.query(seed_admin_query, (error, result) => {
  if (error) {
    console.error("Error inserting admin data:", error);
  } else {
    console.log("Admin seeded successfully:", result);
  }
  connection.end();
});

//password: admin@123
