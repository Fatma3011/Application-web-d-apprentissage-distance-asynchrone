const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const AdminSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastname: {
      type: String,
      minlength: 3,
    },
    email: {
      unique: true,
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const admin = mongoose.model("admin", AdminSchema);
module.exports = admin;
