const express = require("express");
const { User } = require("./../models/User");
const app = express();

const Login = app.post("/api/login", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const userData = await User.find({ userName });

    if (userData.length < 1) {
      res.send({
        statusCode: -2,
        message: "User not Found!",
      });
      return;
    }

    if (userData[0].password === password) {
      res.send({
        statusCode: 200,
        message: "Success",
        data: {
          id: userData[0]._id,
        },
      });
    } else {
      res.send({
        statusCode: -1,
        message: "Password is Wrong!",
      });
    }
  } catch (err) {
    errHandler(res, err);
    console.log("/api/login", err);
  }
});

module.exports = { Login };
