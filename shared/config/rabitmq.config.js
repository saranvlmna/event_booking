import { connect } from "amqplib";
import config from "./index.js";
const { hostname, port } = config.rabitmq;
export default async () => {
  try {
    const connection = await connect({
      hostname,
      port,
    });
    console.log(`connected to RabbitMQ ${hostname}:${port}`);

    const channel = await connection.createChannel();
    return channel;
  } catch (error) {
    console.error(error);
  }
};
