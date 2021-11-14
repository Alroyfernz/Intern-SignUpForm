const exports = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT;
const authRoute = require("./Routes/Auth");
dotenv.config();
app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log("Backend server running on", port);
});
