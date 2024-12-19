import connection from "../../../shared/database/connection.js";

export default (code) => {
  try {
    const query = `SELECT COUNT (*) as count FROM eventbooking WHERE event_code=?`;
    return new Promise((resolve, reject) => {
      connection.execute(query, [code], (err, rows) => {
        if (err) reject(err);
        resolve(rows[0].count);
      });
    });
  } catch (error) {
    throw error;
  }
};
