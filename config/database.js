const mongoose = require("mongoose");
let db = 'mongodb+srv://herlgroup:B0raB0ra@cluster0-ki8bs.mongodb.net/test?retryWrites=true&w=majority';
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    
    console.log("MongoDB Connected failed...");
    console.error(err.message);
    process.exit(1);


  }
};
connectDB();


module.exports = connectDB;