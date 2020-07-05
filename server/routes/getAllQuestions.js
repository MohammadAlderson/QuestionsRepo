const express = require("express");
const app = express();
const { Question } = require("./../models/Question");

const GetAllQuestions = app.post("/api/getAllQuestions", async (req, res) => {
  try {
    const allQuestions = await Question.find();
    res.send(allQuestions);
  } catch (err) {
    errHandler(res, err);
    console.log("/api/getAllQuestions", err);
  }
});

module.exports = { GetAllQuestions };
