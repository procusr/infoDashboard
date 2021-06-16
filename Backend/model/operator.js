const mongoose = require("mongoose");
const config = require ("../config/config")


const url = config.mongoURI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((result) => {
    console.log("connected to MongoDB", result);
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error, error.message);
  });

const operatorSchema = new mongoose.Schema({
  name: String,
  status: String
});







module.exports = mongoose.model("Operator", operatorSchema);