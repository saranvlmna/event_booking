import dotevn from "dotenv";
import express from "express";
import config from "./shared/config/config.js";
import userRouter from "./src/user/router.js";
dotevn.config();

const app = express();
const port = config.app.port;

app.use(express.json());
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
