const express = require("express");
const { User } = require("./../models/User");
const app = express();

const Register = app.post("/api/register", async (req, res) => {
  const { userName, password } = req.body;

  try {
    let userNameExists = await User.find({ userName });

    if (userNameExists.length > 0) {
      res.send({
        statusCode: -3,
        message: "This username already exists! try another one",
      });
      return;
    } else {
      const user = new User({
        userName,
        password,
      });

      let userAdded = await user.save();

      res.send({
        statusCode: 200,
        message: "Success",
        data: {
          id: userAdded._id,
        },
      });
    }
  } catch (err) {
    errHandler(res, err);
    console.log("/api/register", err);
  }
});

module.exports = { Register };
