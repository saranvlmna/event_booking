import connection from "../../../shared/config/mysql.config.js";
import generateEeventCode from "../../../shared/utilities/event.code.generate.js";

export default async (name, capacity) => {
  try {
    const code = generateEeventCode();

    await new Promise((resolve, reject) => {
      const query = `INSERT INTO events (code, name, capacity) VALUES (?, ?, ?) `;
      connection.execute(query, [code, name, capacity], (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
    return code;
  } catch (error) {
    throw error;
  }
};
