const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength:[8,'Password should be 8 character long']
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User',userSchema)