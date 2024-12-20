import connectRabbitMQ from "../../shared/config/rabbitmq.config.js";
import redisClient from "../../shared/config/reddis.config.js";
import bookAEvent from "./libs/event.book.js";
import fetchEventBookedCount from "./libs/event.booked.count.js";
import findEvent from "./libs/event.find.js";
import checkEventCapacityIsExceded from "./libs/event.isexceeded.js";

export default async (req, res) => {
  try {
    const user_id = req.user.id;
    const email = req.user.email;
    const code = req.body.code;
    if (!user_id || !code) return res.status(400).send("Params are required");

    const is_exceded = await checkEventCapacityIsExceded(code);
    if (is_exceded)
      return res.status(400).send("Booking for this event is closed");

    const is_event_exist = await findEvent(code);
    if (!is_event_exist) return res.status(400).send("Event not found");
    await bookAEvent(user_id, code);

    //push to queue
    const queueConnection = await connectRabbitMQ();
    await queueConnection.assertQueue("new_booking");
    queueConnection.sendToQueue(
      "new_booking",
      Buffer.from(JSON.stringify({ email, code }))
    );

    //update redis cache
    const booked_count = await fetchEventBookedCount(code);
    await redisClient.set(code, booked_count);

    return res.status(200).send({ message: "Event booked successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).send("Event already booked");
    }
    return res.status(500).send("Internal Server Error");
  }
};
