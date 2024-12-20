import connection from "../../../shared/config/mysql.config.js";

export default async (email) => {
  try {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE email = ? LIMIT 1`;
      connection.execute(query, [email], (err, result) => {
        if (err) return reject(err);
        return resolve(result?.[0]);
      });
    });
  } catch (error) {
    throw error;
  }
};
