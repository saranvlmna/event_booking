import connection from "../../../shared/database/connection.js";
import findEventBookedCount from "./event.booking.count.js";

export default async (code) => {
  const count = await findEventBookedCount(code);

  const event_query = `SELECT events.capacity FROM events WHERE code=?`;
  const event = await new Promise((resolve, reject) => {
    connection.execute(event_query, [code], (err, rows) => {
      if (err) reject(err);
      resolve(rows[0]?.capacity);
    });
  });

  return count >= event;
};
