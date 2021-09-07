const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(
      "<your mongodb connection url",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("connection is successful.");
    })
    .catch(() => {
      console.log("connection is not successful.");
    });
};

module.exports = connectDatabase;
