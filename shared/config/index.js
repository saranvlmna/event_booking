import dotevn from "dotenv";
dotevn.config();

const config = {
  app: {
    port: process.env.PORT || 4578,
  },
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || null,
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || null,
  },
  redis: {
    host: process.env.REDIS_HOST || "redis://127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
  },
};
export default config;
