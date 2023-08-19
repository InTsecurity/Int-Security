const { Client, Account, Databases, ID } = require("appwrite");
const ERRORS = require("./../errors/errorMessages");
const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6466156953c7cbf55e25");

function newContact(req, res) {
  const body = JSON.parse(req.body);
  console.log(body);
  const promise = databases.createDocument(
    process.env.FORMS_DATABASE_ID,
    process.env.CONTACT_COLLECTION_ID,
    ID.unique(),
    body
  );
  promise.then(
    function (response) {
      // send mail
      res.JSON("Successfully added");
    },
    function (error) {
      res.JSON(ERRORS.GENERAL_ERROR);
    }
  );
}

module.exports = newContact;
