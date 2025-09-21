const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/books');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/miapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conected'))
.catch(err => console.error('Error :', err));

app.use('/books', booksRoutes);

app.listen(3000, () => {
  console.log('server: http://localhost:3000');
});
