const express = require("express");
const app = express();
const { Question } = require("./../models/Question");
const { User } = require("./../models/User");

function checkUserExists(userId, res) {
  User.findById(userId, function (err, doc) {
    if (err) {
      res.status(404).send({
        statusCode: -2,
        message: "User not Found!",
      });
      return;
    }
    if (doc == null) {
      res.status(404).send({
        statusCode: -2,
        message: "User not Found!",
      });
      return;
    }
  });
}

const GetUserQuestions = app.post("/api/getUserQuestions", async (req, res) => {
  const { userId } = req.body;
  try {
    checkUserExists(userId, res);
    const userQuestions = await Question.find({ userId });
    res.send({
      statusCode: 200,
      message: "Success",
      data: userQuestions,
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = { GetUserQuestions };
