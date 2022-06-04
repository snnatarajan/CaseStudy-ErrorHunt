const mongoose = require('mongoose');
//mongoose.connect('process.env.MONGODB_URI' || 'mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://atlasadmin:AXWUnxyqTN3FIrSy@ictfspproject.zml3jmi.mongodb.net/?retryWrites=true&w=majority' );

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);
mongoose.set('useFindAndModify', false);   // Part #1 Point 9
module.exports = authordata;
