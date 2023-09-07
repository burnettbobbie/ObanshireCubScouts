
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    // _id: [{ type : mongoose.Schema.Types.ObjectId, ref: 'User'}],
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required:false},
    city: {type: String, required: false},
    postcode: {type: String, required: false},
    disclosure: {
      type: String,
      enum: ['Approved', 'Pending', 'None'],
      default: 'None',
      required: false
    },
    training: {
      type: String,
      enum: ['Completed', 'None'],
      default: 'None',
      required: false
    },
    phone: {type: Number, required: false},
    roles: [{type: mongoose.Schema.Types.ObjectId,ref: "Role", required: null}]

  })
);

module.exports = User;
