const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT;
const authRoute = require("./Routes/Auth");
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.Mongo_url)
  .then(() => {
    console.log("Connection to databse successful");
  })
  .catch((err) => console.log(err));
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log("Backend server running on", port);
});
