import connection from "../connection.js";

const seedAdminQuery = `INSERT INTO users (name, email, password, type)
VALUES ('admin', 'admin@gmail.com', 'admin@123', 'ADMIN');`;

connection.query(seedAdminQuery, (error, result) => {
  if (error) {
    console.error("Error inserting admin data:", error);
  } else {
    console.log("Admin seeded successfully:", result);
  }
  connection.end();
});
