import mongoose from "mongoose";
let Schema = mongoose.Schema;

let student = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  since: {
    type: Date,
    default: Date.now,
  },
  board: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  schoolname: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  parentmobile: {
    type: Number,
    required: true,
  },
});

mongoose.models = {};

let Student = mongoose.model("Student", student);

export default Student;