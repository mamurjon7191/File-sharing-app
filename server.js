const express = require("express");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");

const expressLayouts = require("express-ejs-layouts");

const fileRoutes = require("./routes/fileRouter");
const showRoutes = require("./routes/showRouter");
const downloadRouter = require("./routes/downloadRouter");
const submitPasswordRouter = require("./routes/submitPassword");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT;

const app = express();

app.use(express.urlencoded()); // form dan kevotgan malumotlarni olish uchun ishlatamiz
// create application/json parser
const jsonParser = bodyParser.json();

app.use("/submit-password", jsonParser, submitPasswordRouter);

app.use(express.static("public"));

app.use(expressLayouts);

app.set("view engine", "ejs");

require("./config/db");

app.use("/api/files", fileRoutes);
app.use("/files", showRoutes);
app.use("/download", downloadRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
////////////////////////////////////////////////////////////////////////////////////////////////////
