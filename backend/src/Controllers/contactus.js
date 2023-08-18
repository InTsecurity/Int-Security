const { Client, Account, ID } = require("appwrite");

function newContact(req, res) {
  const body = req.body;

  res.json({ message: "OK Contact recived" });
}

module.exports = newContact;
