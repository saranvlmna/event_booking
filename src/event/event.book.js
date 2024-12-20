import connectRabitMQ from "../../shared/config/rabitmq.config.js";
import redisClient from "../../shared/config/reddis.config.js";
import bookAEvent from "./libs/event.book.js";
import fetchEventBookedCount from "./libs/event.booked.count.js";
import checkEventIsExceded from "./libs/event.isexceded.js";

export default async (req, res) => {
  try {
    const user_id = req.user.id;
    const email = req.user.email;
    const code = req.body.code;
    if (!user_id || !code) res.status(400).send("Params are required");

    const is_exceded = await checkEventIsExceded(code);
    if (is_exceded) res.status(400).send("Event capacity is full");

    await bookAEvent(user_id, code);

    //push to queue
    const queueConnection = await connectRabitMQ();
    await queueConnection.assertQueue("new_booking");
    queueConnection.sendToQueue(
      "new_booking",
      Buffer.from(JSON.stringify({ email, code }))
    );

    //update redis cache
    const booked_count = await fetchEventBookedCount(code);
    await redisClient.set(code, booked_count);

    res.status(200).send({ message: "Event booked successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).send("Event already booked");
    }
    res.status(500).send("Internal Server Error");
  }
};
