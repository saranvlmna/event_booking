import express from "express";
import config from "./shared/config/index.js";
import eventRouter from "./src/event/router.js";
import userRouter from "./src/user/router.js";

const app = express();
const port = config.app.port;

app.use(express.json());
app.use("/user", userRouter);
app.use("/event", eventRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
