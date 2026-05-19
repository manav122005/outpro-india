const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/", async (req, res) => {

  try {

    const newContact = new Contact(req.body);

    await newContact.save();

    res.json({
      success: true,
      message: "Enquiry submitted successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

module.exports = router;