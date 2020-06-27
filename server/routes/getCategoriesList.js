const express = require("express");
const app = express();
const { Category } = require("./../models/Category");
const { errHandler } = require("./../utils/errHandler");

const GetAllCategories = app.post("/api/getAllCategories", async (req, res) => {
  try {
    const allCategories = await Category.find();
    console.log(allCategories);
    res.send({
      statusCode: 200,
      message: "Success",
      data: allCategories,
    });
  } catch (e) {
    errHandler(e);
  }
});

module.exports = { GetAllCategories };
