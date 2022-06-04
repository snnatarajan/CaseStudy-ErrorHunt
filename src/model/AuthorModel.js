const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);
mongoose.set('useFindAndModify', false);   // Part #1 Point 9
module.exports = authordata;