const Operator = require("./model/operator");
const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
  Operator.find({}).then((operators) => {
    res.json(operators);
  });
});

app.get("/users/:id", (req, res) => {
  Operator.findById(req.params.id).then((operator) => {
    if (operator) {
      console.log(operator);
      res.json(operator.toJSON());
    } else {
      res.status(404).end();
    }
  });
});

app.put("/users/:id", (req, res) => {
  const body = req.body;

  const operator = {
    name: body.name,
    status: body.status,
  };

  Operator.findByIdAndUpdate(req.params.id, operator, { new: true })
    .then((updatedStatus) => {
      res.json(updatedStatus.toJSON());
    })
    .catch((error) => console.log(error));
});

app.listen(config.PORT, () => {
  console.log(`Server running on port -> ${config.PORT}`);
});

module.exports = app;
