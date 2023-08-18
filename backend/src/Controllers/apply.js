const { Client, ID, Databases } = require("appwrite");
const CheckErrors = require("./../Validators/CheckErrors");
const ERRORS = require("./../errors/errorMessages.js");

// Appwrite database

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.PROJECT_ID);



// Middleware function

function apply(req, res) {
  const body = req.body;
  const uploadedFile = req.file;
  console.log(uploadedFile);

  const isError = CheckErrors(body);
  if (isError.status) {
    res.json(isError.ErrorInformation);
  }

  // No errors upload file

  const file = bucket.file("path/to/file.pdf");

  file
    .save(buffer)
    .then(() => {
      console.log("File uploaded successfully.");
      res.json({ message: "File Uploaded" });
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
      res.json(ERRORS.GENERAL_ERROR);
    });
}

module.exports = apply;
