import mongoose from "mongoose";

const JobApplicants = new mongoose.Schema(
  {
    jobId: String,
    name: String,
    email: String,
    phone: String,
    resumeLink: String,
  },
  { timestamps: true }
);

const JobApplicantModel = mongoose.model('jobapplicants', JobApplicants);

module.exports = JobApplicantModel;