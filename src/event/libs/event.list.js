import connection from "../../../shared/config/mysql.config.js";

export default () => {
  try {
    const query = `SELECT * FROM events`;
    return new Promise((resolve, reject) => {
      connection.execute(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  } catch (error) {
    throw error;
  }
};
