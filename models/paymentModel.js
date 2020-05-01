
//FILENAME : Bodatype.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PaymentSchema = mongoose.Schema({
  UserId:{
    type: String,
    required: true
  },
  OrderId:{
   type: String,
   required: true,
   index: {unique: true, sparse: true}
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  by: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model user with UserSchema
module.exports = mongoose.model("payment", PaymentSchema);