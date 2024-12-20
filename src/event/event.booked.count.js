import redisClient from "../../shared/config/reddis.config.js";
import fetchEventBookedCount from "./libs/event.booked.count.js";

export default async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) return res.status(400).send("Event code is required");

    let booked_count = parseInt(await redisClient.get(code)) || 0;
    if (!booked_count) {
      booked_count = await fetchEventBookedCount(code);
      await redisClient.set(code, booked_count);
    }

    return res.status(200).send({
      message: "Booked event count fetched successfully",
      event_id: code,
      booked_count,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};
