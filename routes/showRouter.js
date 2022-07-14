const showController = require("../controllers/showController");

const showRouter = require("express").Router();

showRouter.get("/:uuid", showController);

module.exports = showRouter;
