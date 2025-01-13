const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  course: { type: String, required: true },
  twelfthPercentage: { type: Number, required: true },
  tenthPercentage: { type: Number, required: true },
  graduationPercentage: { type: Number, required: true },
  hobby: { type: String, required: true },
  workingExperience: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
