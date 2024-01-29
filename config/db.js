const mongoose = require("mongoose");

require("dotenv").config;

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Issue in connecting Database");
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
