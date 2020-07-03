const express = require("express");
const app = express();
const { User } = require("./../models/User");

const SetUserAnswers = app.post("/api/setUserAnswers", async (req, res) => {
  const { userId, ansCount, correctAnsCount } = req.body;

  User.findByIdAndUpdate(
    userId,
    { $inc: { ansCount, correctAnsCount } },
    function (err, doc) {
      if (err) {
        res.status(404).send({
          err,
          statusCode: 404,
        });
      }
      // console.log(doc);
      res.send({
        statusCode: 200,
        message: "Success",
        data: "profile successfuly edited!",
      });
    }
  );
});

module.exports = { SetUserAnswers };
