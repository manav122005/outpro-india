const express = require("express");

const router = express.Router();

const Contact = require("../models/Contact");

router.post("/", async (req, res) => {

  try {

    console.log(req.body);

    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      company: req.body.company,
      message: req.body.message,
    });

    await newContact.save();

    console.log("Saved Successfully");

    res.status(201).json({
      success: true,
      message: "Inquiry Submitted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});

module.exports = router;