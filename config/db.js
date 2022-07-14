const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {});

const connetion = mongoose.connection;

connetion.once("open", () => {
  console.log("DB is connected");
});

connetion.on("error", () => {
  console.log("Connection error");
});
