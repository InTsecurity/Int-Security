import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import uploadData from "./controller/uploadData.js";

const app = express();

dotenv.config();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/contact", uploadData);

mongoose.connect(process.env.MONGO_URL || "");

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
