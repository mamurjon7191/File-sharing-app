const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE - URL, {}, () => {
  console.log("DB is connected");
});
