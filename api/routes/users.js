//create router using express framework
const router = require("express").Router();
//we are going to use User model here
const User = require("../models/User");
//we can update password as well so we need bcrypt library here as well
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
//UPDATE USER

//when we need to update something we use put method
//we are taking the id of user and finding him/her by it and updating it
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          //set everything given in body
          $set: req.body,
        },
        { new: true }
      );
      //if everything is ok send status 200 OK and response
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your own account!");
  }
});

//DELETE USER
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      //if user is found
      const user = User.findById(req.params.id);
      try {
        //if user is found we need to delete posts written by this user
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found");
    }
  } else {
    res.status(401).json("You can update only your own account!");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
