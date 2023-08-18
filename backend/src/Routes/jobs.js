const express = require("express");
const apply = require("./../Controllers/apply.js");

const jobsRouter = express.Router();

jobsRouter.post("/apply", upload.single("FileDetails[selectedFile]"), apply);

module.exports = jobsRouter;
