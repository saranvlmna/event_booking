import connection from "../../../shared/config/mysql.config.js";

export default (code) => {
  try {
    const query = `SELECT COUNT (*) as count FROM eventbooking WHERE event_code=?`;
    return new Promise((resolve, reject) => {
      connection.execute(query, [code], (err, result) => {
        if (err) reject(err);
        resolve(result[0].count);
      });
    });
  } catch (error) {
    throw error;
  }
};
