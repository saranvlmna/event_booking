import bookAEvent from "./libs/event.book.js";
import checkEventIsExceded from "./libs/event.isexceded.js";

export default async (req, res) => {
  try {
    const user_id = req.user.id;
    const code = req.body.code;
    if (!user_id || !code) res.status(400).send("Params are required");

    const is_exceded = await checkEventIsExceded(code);
    if (is_exceded) res.status(400).send("Event capacity is full");

    await bookAEvent(user_id, code);
    res.status(200).send({ message: "Event booked successfully" });
  } catch (error) {
    console.error(error);
    if (error.code === "ER_DUP_ENTRY") {
      res.status(400).send("Event already booked");
    }
    res.status(500).send("Internal Server Error");
  }
};
