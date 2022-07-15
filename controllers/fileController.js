const multer = require("multer");
const bcrypt = require("bcrypt");
const File = require("../model/fileModel");
const path = require("path");

const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniquiName = `${
      Date.now() - Math.round(Math.random() * 1e9)
    }${path.extname(file.originalname)}`;
    cb(null, uniquiName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10000 * 100,
  },
}).single("myFile");

const fileUpload = (req, res) => {
  try {
    upload(req, res, async (err) => {
      let hashPassword = undefined;
      if (req.body.password) {
        hashPassword = await bcrypt.hash(req.body.password, 12);
      }
      if (err) {
        res.status(404).json({
          status: "failed",
        });
      }
      const file = await File.create({
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
        uuid: uuidv4(),
        password: hashPassword,
      });

      res.status(201).json({
        fileUrl: `${process.env.APP_BASE_URL}/files/${file.uuid}`,
      });
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  fileUpload,
};
