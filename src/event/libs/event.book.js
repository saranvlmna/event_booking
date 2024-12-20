import redisClient from "../../../shared/config/reddis.config.js";
import connection from "../../../shared/database/connection.js";
import fetchEventBookedCount from "./event.booked.count.js";

export default async (user_id, event_code) => {
  try {
    const result = await new Promise((resolve, reject) => {
      const query = `INSERT INTO eventbooking (user_id,event_code) VALUES (?,?);`;
      connection.execute(query, [user_id, event_code], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });

    const booked_count = await fetchEventBookedCount(event_code);
    await redisClient.set(event_code, booked_count);

    return result;
  } catch (error) {
    throw error;
  }
};
