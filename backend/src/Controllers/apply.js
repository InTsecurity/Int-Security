const { Client, Account, ID } = require("appwrite");

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("[PROJECT_ID]");

function apply(req, res) {
  const body = req.body;

  res.json({
    message: "OK",
  });
}

module.exports = apply;
