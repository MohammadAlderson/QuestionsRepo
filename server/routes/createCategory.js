const express = require("express");
const { Category } = require("./../models/Category");

const app = express();

const CreateCategory = app.post("/api/createCategory", async (req, res) => {
  const { name, type } = req.body;
  console.log(name);
  try {
    const newCategory = new Category({
      name,
      type,
    });
    let addedCategory = await newCategory.save();

    res.send({
      statusCode: 200,
      message: "Success",
      data: "دسته بندی با موفقیت اضافه شد",
    });
    console.log(addedCategory);
  } catch (e) {
    errHandler(res, e);
    console.log("/api/createCategory", e);
  }
});

module.exports = { CreateCategory };
