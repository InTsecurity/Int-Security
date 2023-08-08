const express = require("express");
const serverless = require("serverless-http");
const contactRouter = require("./Routes/contact");
const jobsRouter = require("./Routes/jobs");

const app = express();
require("dotenv").config();

app.use("/.netlify/functions/app/contact", contactRouter);
app.use("/.netlify/functions/app/jobs", jobsRouter);

module.exports.handler = serverless(app);
