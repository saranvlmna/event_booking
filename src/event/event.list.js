import getEvents from "./libs/event.list.js";

export default async (req, res) => {
  try {
    const events = await getEvents();
    return res
      .status(200)
      .send({ message: "Event listsed successfully", events });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};
