const express = require("express");
const dotenv = require("dotenv");

const fileRoutes = require("./routes/fileRouter");
const showRoutes = require("./routes/showRouter");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT;

const app = express();

app.set("views", "/views/");

app.set("view engine", "ejs");

require("./config/db");

app.use("/api/files", fileRoutes);
app.use("/files", showRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
