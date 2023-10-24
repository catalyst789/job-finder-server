import express, { Request, Response } from "express";
import { mockJobsData } from "../mockData";
const JobModel = require("../model/JobSchema");
const JobApplicantModel = require("../model/JobApplicants");

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const allJobs = await JobModel.find();
    if (!allJobs) return res.status(404).json({ message: "No Jobs Found" });
    res.status(200).json(allJobs);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getJobById = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.jobId;
    const job = await JobModel.findOne({ jobId: jobId });
    if (!job)
      return res.status(404).json({ message: "No Job Found for this id" });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const applyJob = async (req: Request, res: Response) => {
  try {
    const { jobId, name, email, phone, resumeLink } = req.body;
    const job = await JobModel.findOne({ jobId: jobId });
    if (!job)
      return res.status(400).json({ message: "No Job Found for this id" });
    const allApllicants = await JobApplicantModel.find();
    console.log(allApllicants);
    await JobApplicantModel.create({
      jobId,
      name,
      email,
      phone,
      resumeLink,
    });
    res.status(200).json({ message: "Sucessfully applied for this job" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getJobApplicationsJobId = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.jobId;
    const jobApplications = await JobApplicantModel.find({ jobId });
    // const jobApplications = await JobApplicantModel.find().where('jobId').equals(jobId);
    if (!jobApplications)
      return res
        .status(404)
        .json({ message: "No Applications Found for this id" });
    res.status(200).json(jobApplications);
  } catch (error) {
    res.status(500).send(error);
  }
};
