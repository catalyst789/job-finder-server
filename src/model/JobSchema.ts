const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobId: String,
  title: String,
  experience: String,
  location: String,
  salary: String,
  skills: [String],
  rolesAndResponsibilities: [String],
  jobDescription: String,
  company: String,
  contactEmail: String,
  deadline: Date,
});

const Job = mongoose.model('job', jobSchema);
module.exports = Job;
