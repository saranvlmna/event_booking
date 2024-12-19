import fetchEventBookedCount from "./libs/event.booked.count.js";

export default async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) res.status(400).send("Event code are required");

    const booked_count = await fetchEventBookedCount(code);
    res.status(200).send({
      message: "Fetch booked event count successfully",
      event_id: code,
      booked_count: booked_count,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
