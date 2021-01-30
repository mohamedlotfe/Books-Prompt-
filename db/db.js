const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoURL = "mongodb+srv://admin:admin123@cluster0.2zepn.mongodb.net/blog?retryWrites=true&w=majority"
var connection =  mongoose.createConnection(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { console.log("we're connected to db!"); });

module.exports = connection;