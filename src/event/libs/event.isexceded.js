import connection from "../../../shared/database/connection.js";
import fetchEventBookedCount from "./event.booked.count.js";

export default async (code) => {
  try {
    const count = await fetchEventBookedCount(code);

    const event_query = `SELECT events.capacity FROM events WHERE code=?`;
    const event = await new Promise((resolve, reject) => {
      connection.execute(event_query, [code], (err, result) => {
        if (err) reject(err);
        resolve(result[0]?.capacity);
      });
    });

    return count >= event;
  } catch (error) {
    throw error;
  }
};
