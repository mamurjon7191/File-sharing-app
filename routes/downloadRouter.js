const download = require("../controllers/downloadController");

const downloadRouter = require("express").Router();

downloadRouter.get("/:uuid", download);

module.exports = downloadRouter;
