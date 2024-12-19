import connection from "../connection.js";

const seedAdminQuery = `INSERT INTO users (name, email, password, type)
VALUES ('admin', 'admin@gmail.com', 'admin@123', 'ADMIN');`;

connection.query(seedAdminQuery, (err, results) => {
  if (err) {
    console.error("Error inserting admin data:", err);
  } else {
    console.log("Admin seeded successfully:", results);
  }
  connection.end();
});
