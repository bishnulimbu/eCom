const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.dbUrl)
    console.log("connected to db successfully")

  } catch (error) {
    console.error("mongodb connection error", error)
    process.exit(1);

  }
}

module.exports = connectDb;
