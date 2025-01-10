// routes/submit.js

const express = require('express');
const router = express.Router();
const BookSubmission = require('../Models/BookSubmission'); // Ensure this path is correct

// Create a new submission
router.post('/', async (req, res) => {
    const newSubmission = new BookSubmission(req.body);
    try {
        const savedSubmission = await newSubmission.save();
        res.status(201).json(savedSubmission);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: "Error saving submission" });
    }
});

module.exports = router;