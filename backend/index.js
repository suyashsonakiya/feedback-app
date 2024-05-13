import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/feedbackApp")
  .then(() => {
    console.log("DB Connected Successfully");
    // app.listen(4000);
  })
  .catch((error) => {
    console.log("error", error);
  });

// User Schema

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  feedback: String,
});

const User = new mongoose.model("User", userSchema);
// Routes

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  // if user already exist then check

  User.findOne({ email: email }).then((user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        name,
        email,
        password,
        feedback: "",
      });
      user.save().then((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered" });
        }
      });
    }
  });
});

app.post("/feedback",(req, res)=>{
    const {name, feedback} = req.body;
    res.send({ message: "Successfully Registered" });
})

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
