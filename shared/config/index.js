import dotevn from "dotenv";
dotevn.config();

const config = {
  app: {
    port: process.env.PORT || 4578,
    auth_secret: process.env.ACCESS_TOKEN_KEY || "sdfgsdgs",
    auth_token_exp: process.env.ACCESS_TOKEN_EXP || "1d",
  },
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || null,
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || null,
  },
  redis: {
    host: process.env.REDIS_HOST || "redis://localhost",
    port: process.env.REDIS_PORT || 6379,
  },
  rabitmq: {
    hostname: process.env.RABBIT_MQ_HOST || "localhost",
    port: process.env.RABBIT_MQ_PORT || 5672,
  },
};
export default config;
