const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 8800;
const cors = require("cors");
const authRoute = require("./Routes/Auth");
dotenv.config();
app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.Mongo_url)
  .then(() => {
    console.log("Connection to database successful");
  })
  .catch((err) => console.log(err));
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log("Backend server running on", port);
});
