import express from "express";
import config from "./shared/config/config.js";

const app = express();
const port = config.app.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
