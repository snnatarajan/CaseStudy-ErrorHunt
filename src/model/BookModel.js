const mongoose = require('mongoose');

mongoose.connect('process.env.MONGODB_URI' || 'mongodb://localhost:27017/Library');

const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

mongoose.set('useFindAndModify', false);   // Part #1 Point 9

module.exports = bookdata;