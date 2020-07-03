const errHandler = function (res, err) {
  res.status(500).send({
    statusCode: 500,
    message: "Contact with Support!",
    data: err,
  });
  console.log(err);
};

module.exports = { errHandler };
