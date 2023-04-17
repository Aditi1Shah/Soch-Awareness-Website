//import mongoose
const mongoose = require("mongoose");

//create a user schema
const UserSchema = new mongoose.Schema(
  {
    //username
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

//export the mongoose model and pass your schema
module.exports = mongoose.model("User", UserSchema);
