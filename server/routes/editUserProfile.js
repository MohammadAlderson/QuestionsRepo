const express = require("express");
const app = express();
const { User } = require("./../models/User");

const EditUserProfile = app.post("/api/EditUserProfile", async (req, res) => {
  const { displayName, email, userId } = req.body;
  let newEmail = email ? email : null;
  let newName = displayName ? displayName : null;
  User.findByIdAndUpdate(
    userId,
    { email: newEmail, displayName: newName },
    function (err, doc) {
      if (err) {
        res.status(404).send({
          err,
          statusCode: 404,
        });
      }
      console.log(doc);
      res.send({
        statusCode: 200,
        message: "Success",
        data: "profile successfuly edited!",
      });
    }
  );
});

module.exports = { EditUserProfile };
