const Contact = require("../models/temp");

const submitContact = async (req, res) => {

  try {

    console.log("Incoming Data:", req.body);

    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      company: req.body.company,
      message: req.body.message,
    });

    console.log("Before Save");

    await newContact.save();

    console.log("Saved Successfully");

    res.status(201).json({
      success: true,
      message: "Enquiry Submitted Successfully",
    });

  } catch (error) {

    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }
};

module.exports = {
  submitContact,
};