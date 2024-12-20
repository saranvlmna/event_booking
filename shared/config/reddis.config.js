import { createClient } from "redis";
import config from "./index.js";
const { host, port } = config.redis;

const redisClient = createClient({
  host,
  port,
});

redisClient
  .connect()
  .then(() => {
    console.log(`connected to Redis ${host}:${port}`);
  })
  .catch((err) => {
    console.error("redis connection error:", err);
  });

export default redisClient;
