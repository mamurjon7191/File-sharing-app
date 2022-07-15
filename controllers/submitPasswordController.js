const bcrypt = require("bcrypt");
const File = require("../model/fileModel");

const submitPasswordController = async (req, res) => {
  const uuid = req.params.uuid;
  const file = await File.findOne({
    uuid: uuid,
  });
  // endi parolni tekshirvolamiz
  const tekshirHashga = async (oddiyPassword, hashPAssword) => {
    return await bcrypt.compare(oddiyPassword, hashPAssword);
  };

  if (!(await tekshirHashga(req.body.parol, file.password))) {
    return res.status(404).json({
      message: "Parol xato kiritildi",
    });
  } else {
    const response = `${__dirname}/../${file.path}`;
    res.download(response);
  }
};

module.exports = submitPasswordController;

const tekshirHashga = async (oddiyPassword, hashPAssword) => {
  return await bcrypt.compare(oddiyPassword, hashPAssword);
};
