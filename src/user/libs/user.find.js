import connection from "../../../shared/database/connection.js";

export default async (email, password) => {
  try {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1`;
      connection.execute(query, [email, password], (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results?.[0]);
      });
    });
  } catch (error) {
    throw error;
  }
};
