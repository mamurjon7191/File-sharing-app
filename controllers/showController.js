const File = require("../model/fileModel");

const showController = async (req, res) => {
  const file = await File.findOne({ uuid: req.params.uuid });
  const downloadUrl = `${process.env.APP_BASE_URL}/download/${file.uuid}`;
  res.render("downloads", { downloadUrl, file });
};

module.exports = showController;
