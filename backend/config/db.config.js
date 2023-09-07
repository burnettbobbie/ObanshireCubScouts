
require('dotenv').config();
const Db = process.env.ATLAS_URI;


const mongoose = require('mongoose');

//connect to mongoDB
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(Db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

