const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const router = express.Router();
const path = require("path");
//const router = require("express").Router();
const e111915094_Employee_Detail = require("./models/e111915094_Employee_Detail");
const bcrypt = require("bcrypt");

dotenv.config();



mongoose.connect(
  'mongodb+srv://itsPratik:Database1234@mycluster.uhjpz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


const cors = require("cors");
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration



app.post("/login",  async (req, res) => {
  try {
    console.log(req.body.email);
    const user = await e111915094_Employee_Detail.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

app.post("/register", async (req, res) => {
  try {
    //create new user
    const newUser = new e111915094_Employee_Detail({
      firstname: req.body.fullname,
      contact: req.body.email,
      password: req.body.password,
    });

    console.log(req.body.fullname, newUser);

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});

// app.use("/categories", categoryRoute);

app.get("/", (req, res) => {
  res.send("Hi");
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Backend server is running at " + port);
});
