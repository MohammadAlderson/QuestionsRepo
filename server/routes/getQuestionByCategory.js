const express = require("express");
const app = express();
const { Question } = require("./../models/Question");
const { errHandler } = require("./../utils/errHandler");

const GetQuestionByCategory = app.post(
  "/api/getQuestionByCategory",
  async (req, res) => {
    const { categoryId, take } = req.body;
    // try {
    //   const QuestionList = await Question.find({ categoryId }, null, {
    //     limit: Number(take),
    //   });
    //   res.send({
    //     statusCode: 200,
    //     message: "Success",
    //     data: QuestionList,
    //   });
    // } catch (e) {
    //   errHandler(res, e);
    // }
    Question.findRandom(
      { categoryId: categoryId },
      {},
      { limit: take },
      function (err, QuestionList) {
        // console.log(QuestionList);
        if (err) {
          errHandler(res, err);
        }
        res.send({
          statusCode: 200,
          message: "Success",
          data: QuestionList,
        });
      }
    );
  }
);

module.exports = { GetQuestionByCategory };
