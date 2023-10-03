const express = require("express");
const mongoose = require("mongoose");
const { UserModel } = require("./user.model.js");
const {MONGO_DB_URL} = require('./config.js');

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("check");
});


app.post("/registration", async (req, res) => {
  try {
    const { name, email, contact, address, dob, password } = req.body;
    if ((!name || !email || !contact || !address, !dob, !password)) {
      return res.status(400).send({ error: "Please fill all fields" });
    }

    const newUser = {
      name,
      email,
      contact,
      address,
      dob,
      password,
    };
    const user = await UserModel.create(newUser);
    return res.status(201).send({ user, message: "New User created" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({ error: "Please fill all fields" });
    }
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(404).send({ message: "Incorrect password" });
    }

    return res.status(200).send({ message: "Login success." });
  } catch (error) {
    if (error) {
      return res.status(500).send({ error: "Server error" });
    }
  }
});



mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log("DB Connected");
    app.listen(port, () => {
      console.log(`Server listening on port`, port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
