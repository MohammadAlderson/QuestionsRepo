const express = require("express");
const bodyParser = require("body-parser");
const { mongoose } = require("./db/mongoose");
const { Login } = require("./routes/login");
const { Register } = require("./routes/register");
const { CreateQuestion } = require("./routes/createQuestion");
const { GetAllQuestions } = require("./routes/getAllQuestions");
const { GetUserQuestions } = require("./routes/getUserQuestions");
const { GetAllCategories } = require("./routes/getCategoriesList");
const { CreateCategory } = require("./routes/createCategory");
const { GetUserData } = require("./routes/getUserData");
const { EditUserProfile } = require("./routes/editUserProfile");

const app = express();

let port = process.env.PORT || "4001";

app.use(bodyParser.json());

app.use(Login);
app.use(Register);
app.use(CreateQuestion);
app.use(GetAllQuestions);
app.use(GetUserQuestions);
app.use(GetAllCategories);
app.use(CreateCategory);
app.use(GetUserData);
app.use(EditUserProfile);

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.listen(port, () => console.log(`Server is running on ${port}`));
