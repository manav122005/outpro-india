const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({

  name: String,

  email: String,

  company: String,

  message: String,

});

module.exports = mongoose.model(
  "contacts",
  ContactSchema
);