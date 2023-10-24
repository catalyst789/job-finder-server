import express from "express";
import { applyJob, getAllJobs, getJobById } from "../controllers/JobController";

const router = express();

router.get("/getAll", getAllJobs);
router.get("/get/:jobId", getJobById);
router.post("/apply", applyJob);


module.exports = router;
