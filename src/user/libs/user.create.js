import connection from "../../../shared/database/connection.js";

export default (data) => {
  try {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO users (email, password, name) VALUES (?, ?, ?)`;
      connection.execute(
        query,
        [data.email, data.password, data.name],
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
