const express = require("express");
const apply = require("./../Controllers/apply.js");

const jobsRouter = express.Router();

jobsRouter.get("/apply", apply);

module.exports = jobsRouter;
