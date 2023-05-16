const mongoose = require("mongoose");
const { loadConfig } = require("dotenv")

// const connectionString = process.env.URL
//   "mongodb+srv://root:root@cluster0.hkfbjtl.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = (url)=>{
  return mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB;

