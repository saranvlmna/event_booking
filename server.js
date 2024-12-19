const express = require("express");
const { default: config } = require("./shared/config/config");
const app = express();
const port = config.app.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
