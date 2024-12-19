import eventCreate from "./libs/event.create.js";

export default async (req, res) => {
  try {
    const { name, capacity } = req.body;
    if (!name || !capacity) {
      return res.status(400).send("Params are required");
    }

    await eventCreate(name, capacity);
    res.status(200).send({ message: "Event created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
