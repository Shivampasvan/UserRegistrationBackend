const mongoose = require("mongoose");

//  User Schema 

const userSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

//  UserModel 

const UserModel = mongoose.model("users", userSchema);

module.exports = {
  UserModel,
};