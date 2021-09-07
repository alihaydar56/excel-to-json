const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const suppliers = new Schema({
  queryType: {
    type: String,
  },
  email: {
    type: String,
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
  city: {
    type: mongoose.Schema.ObjectId,
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

module.exports = mongoose.model("users", suppliers);
