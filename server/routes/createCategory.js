const express = require("express");
const { Category } = require("./../models/Category");

const app = express();

const CreateCategory = app.post("/api/createCategory", async (req, res) => {
  const { name } = req.body;
  console.log(name);
  try {
    const newCategory = new Category({
      name,
    });
    let addedCategory = await newCategory.save();

    res.send({
      statusCode: 200,
      message: "Success",
      data: "دسته بندی با موفقیت اضافه شد",
    });
    console.log(addedCategory);
  } catch (e) {
    res.send(e);
    console.log(e);
  }
});

module.exports = { CreateCategory };
