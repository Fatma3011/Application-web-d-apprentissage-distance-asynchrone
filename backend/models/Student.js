const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
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
  const student = mongoose.model("student", StudentSchema);
module.exports = student;