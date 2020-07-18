const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  stdId: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 5,
  },
  thaiId: {
    type: String,
    required: true,
    minlength: 13,
    maxlength: 13,
  },
  gender: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 6,
  },
  name: {
    type: String,
    required: true,
    maxlength: 255,
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 255,
  },
  level: {
    type: Number,
    required: true,
    min: 1,
    max: 6
  },
  room: {
    type: Number,
    required: true,
    min: 1,
    max: 14
  },
  no: {
    type: Number,
    required: true,
    min: 1,
    max: 50
  },
  activity_id: {
    type: Number,
    min: 1,
    max: 1000
  }
});

module.exports = mongoose.model('student', studentSchema);
