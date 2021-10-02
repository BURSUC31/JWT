const express = require("express");
const authRoute = require("./routes/auth.js");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, () => console.log("connected to db"));
mongoose.connection.once("open", () => {
  console.log("database connected");
});
app.use("/api/user", authRoute);
app.listen(3000, () => {
  console.log("server started");
});
