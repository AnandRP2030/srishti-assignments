const express = require("express");
const mongoose = require("mongoose");
const { UserModel } = require("./user.model.js");
const {MONGO_DB_URL} = require('./config.js');
const {registerUser, loginUser} = require('./controller/userController.js');

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("check");
});

app.post("/registration", registerUser);
app.post("/login", loginUser);

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
