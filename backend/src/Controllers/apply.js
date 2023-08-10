const { Client, ID, Databases, Storage } = require("appwrite");
const fs = require("fs");
const path = require("path");
const CheckErrors = require("./../Validators/CheckErrors");
const ERRORS = require("./../errors/errorMessages.js");

const client = new Client();

const storage = new Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.PROJECT_ID);

function apply(req, res) {
  const body = req.body;
  const uploadedFile = req.file;
  console.log(uploadedFile);

  const targetDir = path.join(__dirname, "../resume");
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFilePath = path.join(targetDir, uploadedFile.originalname);

  fs.writeFileSync(targetFilePath, uploadedFile.buffer);

  const isError = CheckErrors(body);
  if (isError.status) {
    res.json(isError.ErrorInformation);
  }

  // try {
  //   const promise = storage.createFile(
  //     process.env.JOBS_BUCKET_ID,
  //     ID.unique(),
  //     fs.createReadStream(tempFilePath)
  //   );
  //   promise.then((e) => {
  //     console.log(e);
  //   });
  // } catch (err) {
  //   res.json({ Error: ERRORS.GENERAL_ERROR, main: err });
  // }
  res.json({ Error: ERRORS.GENERAL_ERROR });
}

module.exports = apply;
