import express from "express";
import config from "./shared/config/index.js";
import consumeEventQueue from "./src/communication/event.booking.notification.js";
import eventRouter from "./src/event/router.js";
import userRouter from "./src/user/router.js";
const { port } = config.app;
const app = express();

consumeEventQueue("new_booking");

app.use(express.json());
app.use("/user", userRouter);
app.use("/event", eventRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
