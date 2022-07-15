const submitPasswordController = require("../controllers/submitPasswordController");

const submitPasswordRouter = require("express").Router();

submitPasswordRouter.post("/:uuid", submitPasswordController);

module.exports = submitPasswordRouter;
