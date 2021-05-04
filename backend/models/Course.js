const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  { 
    title: {
      type: String,
      required: true,
      minlength: 3,
    },
    topic: {
      type: String,
      minlength: 3,
    },
    language: {
      type: String,
    },
    estimatedTime: {
      type: Number,
      minlength: 8,
    },
    chapters: {
      unique: true,
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
const course = mongoose.model("course", CourseSchema);
module.exports = course;
