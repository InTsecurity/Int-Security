const express = require("express");
const apply = require("./../Controllers/apply.js");
const multer = require("multer");

const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({ storage: storage });

const jobsRouter = express.Router();

jobsRouter.post("/apply", upload.single("FileDetails[selectedFile]"), apply);

module.exports = jobsRouter;
