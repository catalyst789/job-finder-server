import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
const server = express();

dotenv.config();
require("./db/connect");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

const jobRouter = require("./routes/JobRoutes");

server.get("/health", (req: Request, res: Response) => {
  res.send("Up and Running.");
});

server.use("/jobs", jobRouter);

server.listen(3000, () => console.log("Server is up at 3000"));
