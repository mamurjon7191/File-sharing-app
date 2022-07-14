const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniquiName = `${Date.now() - Math.round(Math.random() * 1e9)}`;
    cb(null, uniquiName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10000 * 100,
  },
}).single("myFile");

const fileUpload = (req, res) => {};
