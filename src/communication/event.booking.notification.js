import connectRabitMQ from "../../shared/config/rabitmq.config.js";
import eventFind from "../event/libs/event.find.js";
import findUser from "../user/libs/user.find.js";
const consumeEventQueue = async (queue) => {
  try {
    const queue_channel = await connectRabitMQ();
    await queue_channel.assertQueue(queue);

    queue_channel.consume(queue, async (msg) => {
      if (msg !== null) {
        queue_channel.ack(msg);
        const data = JSON.parse(msg.content);

        const user = await findUser(data.email);
        const event = await eventFind(data.code);

        const notification_object = {
          to: user.email,
          payload: `Hi ${user.name} you are successfully registed with the ${event.name} event. thanks`,
        };

        console.log("====EMAIL NOTIFICATION OBJECT=====", notification_object);
      }
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default consumeEventQueue;
