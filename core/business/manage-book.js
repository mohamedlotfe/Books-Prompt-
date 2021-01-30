const util = require('../dal/book.util')
let Book = require('../dal/Book')
module.exports = {
    ViewAllBook: async () => {
        const books = await util.findAll()
        return books;
    },
    getBookById: async (bookId) => {
        const books = await module.exports.ViewAllBook()
        let { id, title, author, description } = books.find(book => book.id == bookId) || {};
        let book = (id && title && author) ? new Book(id, title, author, { description }) : null;
        return book
    },
    addBook: async (newBook) => {
        return await util.create(newBook)
    },
    editBook: async (id, book) => {
        return await util.update(id, book.title, book.author, book.description)
    },
    search: async (text) => {
        try {
            var regex = new RegExp(text, "i");
            return await util.search(regex)
        } catch (error) {
            console.log(error);
          return []
        }

    },
}