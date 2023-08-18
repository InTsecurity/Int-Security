const express = require("express");
const sendMail = require("./../Controllers/mail.js");

const mailRouter = express.Router();

mailRouter.get("/mail", sendMail);

module.exports = mailRouter;
