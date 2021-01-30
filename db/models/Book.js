const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    
    id: Number,
    title: String,
    author: String,
    description: String
});

var BindModel = function (mongoConnection,callback) {
    BookModel = mongoConnection.model('book', bookSchema,'book');
    return callback(BookModel)
}
module.exports = { BindModel};