const File = require("../model/fileModel");

const showController = async (req, res) => {
  const file = await File.findById(req.params.uuid);
  res.render("downloads", { file });
};

module.exports = showController;
