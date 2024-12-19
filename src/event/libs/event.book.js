import connection from "../../../shared/database/connection.js";

export default (user_id, event_code) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO eventbooking (user_id,event_code) VALUES (?,?);`;
    connection.execute(query, [user_id, event_code], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
