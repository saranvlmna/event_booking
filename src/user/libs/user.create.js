import connection from "../../../shared/config/mysql.config.js";
import genereatePasswordHash from "./password.hash.js";

export default async (data) => {
  try {
    const password = await genereatePasswordHash(data.password);
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO users (email, password, name) VALUES (?, ?, ?)`;
      connection.execute(
        query,
        [data.email, password, data.name],
        (err, result) => {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
  } catch (error) {
    throw error;
  }
};
