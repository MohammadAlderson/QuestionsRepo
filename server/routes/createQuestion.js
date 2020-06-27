const express = require("express");
const { Question } = require("./../models/Question");

const app = express();

const CreateQuestion = app.post("/api/createQuestion", async (req, res) => {
  const { questionText, answers, createdDate, userId, categoryId } = req.body;
  try {
    const newQuestion = new Question({
      questionText,
      answers,
      createdDate,
      userId,
      categoryId,
    });
    let addedQuestion = await newQuestion.save();

    res.send({
      statusCode: 200,
      message: "Success",
      data: "سوال با موفقیت اضافه شد",
    });
    console.log(addedQuestion);
  } catch (e) {
    res.send(e);
    console.log(e);
  }
});

module.exports = { CreateQuestion };
