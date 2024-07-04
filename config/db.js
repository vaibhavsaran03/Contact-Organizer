const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
// const db =
//   'mongodb+srv://vaibhavsaran01:contactKeeper123@cluster0.v61rmle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
