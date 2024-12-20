import createEvent from "./libs/event.create.js";

export default async (req, res) => {
  try {
    const { name, capacity } = req.body;
    if (!name || !capacity) return res.status(400).send("Params are required");

    const event = await createEvent(name, capacity);
    return res
      .status(200)
      .send({ message: "Event created successfully", event });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};
