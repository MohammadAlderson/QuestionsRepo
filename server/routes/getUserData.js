const express = require("express");
const app = express();
const { User } = require("./../models/User");
const { Question } = require("./../models/Question");

const GetUserData = app.post("/api/getUserData", async (req, res) => {
  const { userId } = req.body;
  try {
    let userQuestion = await Question.find({ userId });
    console.log("userQuestion", userQuestion);
    User.findById(userId, function (err, userData) {
      if (err) {
        res.send({
          statusCode: -2,
          message: "User not Found!",
        });
        return;
      }
      if (userData == null) {
        res.send({
          statusCode: -2,
          message: "User not Found!",
        });
        return;
      }
      res.send({
        statusCode: 200,
        message: "Success",
        data: {
          ...userData._doc,
          questionCount: userQuestion.length,
        },
      });
    });
  } catch (err) {
    errHandler(res, err);
    console.log("/api/getUserData", err);
  }
});

module.exports = { GetUserData };
