const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("conncetcds");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
