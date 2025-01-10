// models/BookSubmission.js

const mongoose = require('mongoose');

const bookSubmissionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    bookGenre: { type: String, required: true },
    bookTitle: { type: String, required: true },
    bookAuthor: { type: String, required: true },
    yearOfPublication: { type: String, required: true }
});

module.exports = mongoose.model('BookSubmission', bookSubmissionSchema);