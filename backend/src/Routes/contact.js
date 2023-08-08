const express = require("express");
const newContact = require("../Controllers/contactus.js");

const contactRouter = express.Router();

contactRouter.post("/new", newContact);

module.exports = contactRouter;
