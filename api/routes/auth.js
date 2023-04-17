//create router using express framework
const router = require("express").Router();
//we are going to use User model here
const User = require("../models/User");
//We do not want user's password to be visible in db so for that we have installed a library
//called bcrypt and now we are exporting it
const bcrypt = require("bcrypt");

//Register
router.post("/register", async (req, res) => {
  try {
    //we are specifying salt value for password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    //save this user
    const user = await newUser.save();
    //if everything is good we will send res 200 which stands OK and we will send User in json format at response
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(user);
  } catch (err) {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    //if user is present
    const user = await User.findOne({ username: req.body.username });
    //if no user is there
    !user && res.status(404).json("Wrong Credentials");
    //if there is user then
    const validated = await bcrypt.compare(req.body.password, user.password);
    //if user has already registered but has entered wrong password :
    !validated && res.status(404).json("Wrong Credentials");

    //if user has registered and has entered correct password then we will send 200
    //as response which means validation is successful

    //we are sending user information as success msg
    //res.status(200).json(user);

    //we dont want password to reflect as its what user entered so we will display everything else then password
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
