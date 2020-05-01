const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BodaSchema = mongoose.Schema({
  BodaId:{
   type: String,
   required: true,
   index: {unique: true, sparse: true}
  },
  name: {
    type: String,
    required: true
  },
  downPayment: {
    type: String,
    required: true
  },
  installmentPay: {
    type: String,
    required: true
  },
  payPeriod: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model user with UserSchema
module.exports = mongoose.model("boda", BodaSchema);