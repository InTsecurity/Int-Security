const { Client, Account, ID, Databases } = require("appwrite");
const CheckErrors = require("./../Validators/CheckErrors");
const ERRORS = require("./../errors/errorMessages.js");

const client = new Client();

const storage = new Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject([process.env.PROJECT_ID]);

function apply(req, res) {
  const body = req.body;

  // CHECK ERRORS
  const isError = CheckErrors(body);
  if (isError.status) {
    res.json(isError.ErrorInformation);
  }

  // NO ERRORS FOUND TRY TO UPLOAD THE FILE
  // try {
  //   writeFile("temp/resume.pdf", data).then(() => {
  //     const file = InputFile.fromPath("temp/resume.pdf", "resume.pdf");
  //     console.log(file);
  // const promise = storage.createFile(
  //   process.env.JOBS_BUCKET_ID,
  //   ID.unique(),
  //   document.getElementById("uploader").files[0]
  // );
  //   });
  // } catch {
  //   res.json(ERRORS.GENERAL_ERROR);
  // }
  // Upload Resume

  // const promise = databases.createDocument(
  //   process.env.FORMS_DATABASE_ID,
  //   process.env.JOBS_COLLECTION_ID,
  //   ID.unique(),
  //   {
  //     name: body.name,
  //     phone: body.phone,
  //     email: body.email,
  //     position: body.position,
  //   }
  // );

  res.json({
    message: "OK",
  });
}

module.exports = apply;
