const express = require("express");
const handlePost = require("./../Controllers/mail.js");

const jobsRouter = express.Router();

jobsRouter.post("/apply", handlePost);

module.exports = jobsRouter;
