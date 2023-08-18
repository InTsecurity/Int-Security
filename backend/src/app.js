const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const contactRouter = require("./Routes/contact");
const jobsRouter = require("./Routes/jobs");
const mailRouter = require("./Routes/mail");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

require("dotenv").config();

app.use("/.netlify/functions/app/contact", contactRouter);
app.use("/.netlify/functions/app/jobs", jobsRouter);
app.use("/.netlify/functions/app/", mailRouter);

module.exports.handler = serverless(app);
