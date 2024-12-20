import connection from "../../../shared/database/connection.js";

export default async (user_id, event_code) => {
  try {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO eventbooking (user_id,event_code) VALUES (?,?);`;
      connection.execute(query, [user_id, event_code], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  } catch (error) {
    throw error;
  }
};
