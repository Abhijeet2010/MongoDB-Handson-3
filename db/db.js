const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connection = async () => {
  try {
    const url = "mongodb://127.0.0.1:27017/student";
    await mongoose.connect(url);
    // console.log(dbbb);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connection;
