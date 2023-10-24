import express from "express";
import { applyJob, getAllJobs, getJobApplicationsJobId, getJobById } from "../controllers/JobController";

const router = express();

router.get("/getAll", getAllJobs);
router.get("/get/:jobId", getJobById);
router.post("/apply", applyJob);
router.get("/getJobApplicationsById/:jobId", getJobApplicationsJobId);


module.exports = router;
