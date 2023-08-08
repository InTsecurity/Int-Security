const { Client, Account, ID } = require("appwrite");

function newContact(req, res) {
  res.json({ message: "OK Contact recived" });
}

module.exports = newContact;
