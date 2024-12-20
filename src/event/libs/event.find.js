import connection from "../../../shared/database/connection.js";

export default (code) => {
  try {
    const queue = `SELECT * FROM events WHERE code= ? LIMIT 1;`;
    return new Promise((resolve, reject) => {
      connection.execute(queue, [code], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
