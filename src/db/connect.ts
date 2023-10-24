import mongoose from "mongoose";
import { mockJobsData } from "../mockData";
const JobModel = require("../model/JobSchema");

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
}

connectToDatabase();
