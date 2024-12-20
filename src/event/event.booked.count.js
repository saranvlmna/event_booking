import redisClient from "../../shared/config/reddis.config.js";
import fetchEventBookedCount from "./libs/event.booked.count.js";

export default async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) res.status(400).send("Event code are required");
    let booked_count = 0;

    booked_count = await redisClient.get(code);
    if (!booked_count) {
      booked_count = await fetchEventBookedCount(code);
      await redisClient.set(code, booked_count);
    }

    res.status(200).send({
      message: "Fetch booked event count successfully",
      event_id: code,
      booked_count: parseFloat(booked_count),
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
