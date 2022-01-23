import mongoose from "mongoose";
require('dotenv').config();

console.log(process.env) // !!TODO: remove before deployment

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/habits', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// export mongoose = mongoose.connection