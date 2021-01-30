var express = require('express');
var router = express.Router();
const managBook = require('../core/business/manage-book');

/* GET home page. */
router.get('/books', async function (req, res, next) {
  //res.json(await managBook.ViewAllBook())
  // res.json(await managBook.getBookById("2"))
  // res.json(await managBook.addBook("book 4","abdallah","teeest desc"))
  //res.json(await managBook.editBook(54, { title: "book 4444", author: "Abdallah", description: "abdallah book4" }))
  // res.json(await managBook.search("1"))
});

module.exports = router;
