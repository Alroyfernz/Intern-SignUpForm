const router = require("express").Router();
const userSchema = require("../Models/User");

router.post("/register", async (req, res) => {
  try {
    const newUser = new userSchema(req.body);
    const savedUSer = await newUser.save();
    res.status(200).json(savedUSer);
  } catch (error) {
    console.log(error);
    res.status(404).json("error re");
  }
});

router.get("/login", async (req, res) => {
  try {
    const fetchedUSer = await userSchema.findOne({
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });
    !fetchedUSer && res.status(500).json("You are not registered");
    res.status(200).json(fetchedUSer);
  } catch (error) {
    res.status(500).json("Error while registering");
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await userSchema.findOne(
      {
        email: req.body.email,
      } && { phoneNumber: req.body.phoneNumber }
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json("You are not regustered");
  }
});
module.exports = router;
