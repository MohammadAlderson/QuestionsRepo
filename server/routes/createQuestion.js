const express = require("express");
const { Question } = require("./../models/Question");
const { Category } = require("./../models/Category");
const app = express();

const CreateQuestion = app.post("/api/createQuestion", async (req, res) => {
  const { questionText, answers, createdDate, userId, categoryId } = req.body;
  try {
    const categoryName = await Category.findById(categoryId);
    const newQuestion = new Question({
      questionText,
      answers,
      createdDate,
      userId,
      categoryId,
      categoryName: categoryName.name,
    });

    let addedQuestion = await newQuestion.save();
    res.send({
      statusCode: 200,
      message: "Success",
      data: "سوال با موفقیت اضافه شد",
    });
    console.log(addedQuestion);
  } catch (err) {
    errHandler(res, err);
    console.log("/api/createQuestion", err);
  }
});

module.exports = { CreateQuestion };
