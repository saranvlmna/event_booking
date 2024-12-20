import connection from "../../../shared/config/mysql.config.js";
import redisClient from "../../../shared/config/reddis.config.js";

export default async (code) => {
  try {
    const count = parseInt(await redisClient.get(code)) || 0;

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
