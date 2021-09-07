const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ikame = new Schema({
  name:{
    type:String
  },
  queryType: {
    type: String,
  },
  email: {
    type: String,
  },
  email2:{
      type:String
  },
  email3:{
    type:String
},
  phone: {
    type: String,
  },
  phone2: {
    type: String,
  },
  phone3: {
    type: String,
  },
  name: {
    type: String,
  },
  adress: {
    type: String,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  lastUpdateDate: {
    type: Date,
    default: Date.now(),
  },
  isActive: {
    type: Boolean,
  },
  isDeleted: {
    type: Boolean,
  },
  accountingCode: {
    type: String,
  },
  shortCode: {
    type: String,
  },
});

module.exports = mongoose.model("ikame", ikame);