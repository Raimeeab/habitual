const mongoose = require("mongoose");
require("dotenv").config();

// console.log(process.env); // !!TODO: remove before deployment

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/habits", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection
