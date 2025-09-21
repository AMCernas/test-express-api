const mongoose = require('mongoose')

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    default: 2000
  }
}, { timestamps: true }); 

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
