const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    // other fields as needed
});

module.exports = mongoose.model('Category', categorySchema);