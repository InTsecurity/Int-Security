const { Client, ID, Databases, Storage } = require("appwrite");
const CheckErrors = require("./../Validators/CheckErrors");
const fs = require("fs");
const ERRORS = require("./../errors/errorMessages.js");

const client = new Client();

const storage = new Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.PROJECT_ID);

function apply(req, res) {
  const body = req.body;
  const uploadedFile = req.file.buffer;
  console.log(uploadedFile);

  const isError = CheckErrors(body);
  if (isError.status) {
    res.json(isError.ErrorInformation);
  }

  fs.writeFile("resume.pdf", uploadedFile, (error) => {
    if (error) {
      console.error("Error writing PDF file:", error);
      res.json({ Error: ERRORS.GENERAL_ERROR });
      return 0;
    } else {
      console.log("PDF file written successfully!");
      try {
        storage
          .createFile(
            process.env.JOBS_BUCKET_ID,
            ID.unique(),
            fs.InputFile.fromPath("resume.pdf", "resume.pdf")
          )
          .then((e) => {
            console.log(e);
            res.json({ Message: "File successfully uploaded!" });
          });
      } catch (err) {
        res.json({ Error: ERRORS.GENERAL_ERROR, main: err });
        return 0;
      }
    }
  });
}

module.exports = apply;
