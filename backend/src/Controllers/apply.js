const { Client, ID, Databases, Storage } = require("appwrite");

const sdk = require("node-appwrite");
const CheckErrors = require("./../Validators/CheckErrors");
const fs = require("fs");
const ERRORS = require("./../errors/errorMessages.js");

const client = new sdk.Client();

const storage = new sdk.Storage(client);

// client
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject(process.env.PROJECT_ID);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.PROJECT_ID)
  .setKey(process.env.API_SECRET);

function apply(req, res) {
  const body = req.body;
  const uploadedFile = req.file.buffer;
  console.log(uploadedFile);

  const isError = CheckErrors(body);
  if (isError.status) {
    res.json(isError.ErrorInformation);
  }
}

module.exports = apply;
