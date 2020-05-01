const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CustomerSchema = mongoose.Schema({
  
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  ids: {
    type: String,
    required: true
  },
  phones: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  supervisors: {
    type: String,
    required: true
  },
  workingdays: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  nin: {
    type: String,
    required: true
  },


  refereeName: {
    type: String,
    required: true
  },
  refereePhone: {
    type: String,
    required: true
  },
  refereeWork: {
    type: String,
    required: true
  },
  refereeDob: {
    type: String,
    required: true
  },
  maritalStatus: {
    type: String,
    required: true
  },
  otherLoans: {
    type: String,
    required: true
  },
  Stage: {
    type: String,
    required: true
  },
  lc1: {
    type: String,
    required: true
  },
  lc3: {
    type: String,
    required: true
  },
  confirmDocs: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
}); 
// export model user with UserSchema
module.exports = mongoose.model("customer", CustomerSchema);

