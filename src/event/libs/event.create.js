import connection from "../../../shared/database/connection.js";

export default (name, capacity) => {
  const code = `EVT${Math.floor(Math.random() * 1000000)}`;

  return new Promise((resolve, reject) => {
    const query = `INSERT INTO events (code, name, capacity) VALUES (?, ?, ?)`;
    connection.execute(query, [code, name, capacity], (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};
