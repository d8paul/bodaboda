const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = mongoose.Schema({
  UserId:{
    type: String,
    required: true
  },
  BodaId:{
   type: String,
   required: true,
   index: {unique: true, sparse: true}
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
module.exports = mongoose.model("order", UserSchema);