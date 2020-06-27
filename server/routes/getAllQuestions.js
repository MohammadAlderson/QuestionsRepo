const express = require("express");
const app = express();
const { Question } = require("./../models/Question");

const GetAllQuestions = app.post("/api/getAllQuestions", async (req, res) => {
  try {
    const allQuestions = await Question.find();

    res.send(allQuestions);
  } catch (e) {
    console.log(e);
  }
});

module.exports = { GetAllQuestions };
