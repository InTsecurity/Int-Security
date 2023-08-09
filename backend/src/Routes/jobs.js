const express = require("express");
const apply = require("./../Controllers/apply.js");

const jobsRouter = express.Router();

jobsRouter.post("/apply", apply);

module.exports = jobsRouter;
