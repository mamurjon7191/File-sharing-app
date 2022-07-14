const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT;

const app = express();

require("./config/db");

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


