const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    phoneNumber: {
      type: String,
      required: true,
      minLength: 9,
    },
    companyName: {
      type: String,
    },
    address: {
      type: String,
    },
    pinCode: {
      type: Number,
      minLength: 6,
      maxLength: 6,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

module.exports = mongoose.module("user", userSchema);
