const errHandler = function (res) {
  res.status(500).send({
    statusCode: 500,
    message: "Contact with Support!",
  });
  console.log(err);
};

module.exports = { errHandler };
