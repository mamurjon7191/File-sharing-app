const mongoose = require("mongooses");

const fileScheme = new mongoose.Scheme({
  filename: {
    type: String,
    required: true,
  },
  path: { type: String, required: true },
  size: {
    type: Number,
    required: true,
  },
  uuid: { type: String, required: true },
  sender: { type: String, required: false },
  reciever: { type: String, required: false },
});

const File = mongoose.model("files1", fileScheme);

module.exports = File;
