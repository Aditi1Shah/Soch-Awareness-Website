//create express server
const express = require("express");
//create an application, say app
const app = express();
const dotenv = require("dotenv");
const multer = require("multer");
//import mongoose
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const path = require("path");
dotenv.config();

var cors = require("cors");
app.use(cors());
//when body will come in raw (json form) it will be able to read only when we use express.json()
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.names);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
//lets use app in browser
// app.use("/", (req, res) => {
//   console.log("Hey this is main url");
// });
//listen to a port
app.listen("5000", () => {
  console.log("Backend is running");
});
