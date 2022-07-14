const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = express();

const port = process.env.PORT;

require("./config/db");

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
