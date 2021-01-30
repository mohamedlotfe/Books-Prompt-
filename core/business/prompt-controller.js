const Book = require('../dal/Book');
const managBook = require('./manage-book');
module.exports = {
    viewAllBooks: async () => {
        let books = await managBook.ViewAllBook();
        for (let i = 0; i < books.length; i++) {
            const book = books[i];
            console.log(`[${book.id}] ${book.title}`);
        }
        let action = 1
        while ((action)) {
            action = Number(global.prompt("To view details enter the book ID, to return press <Enter>. "))
            console.log(` ---------- `);
            if (action) {
                let book = await managBook.getBookById(action)
                if (book) {
                    for (const property in book) {
                        if (property != "id")
                            console.log(`${capitalizeFirstLetter(property)}: ${book[property]}`);
                    }
                }
                else {
                    console.log(`No Book with ${action} Id]`);
                    action = 0;
                }
            }
        }
        return
    },
    addBook: async () => {
        let id = Math.round(Math.random() * 100)
        let newBook = new Book(id, title = "", author = "", { description } = {});

        for (const property in newBook) {
            if (property != "id") {
                let newValue = global.prompt(`${capitalizeFirstLetter(property)}: `);
                newBook[property] = newValue;
            }
        }
        console.log("Book Saved");
        await managBook.addBook(newBook)
        return
    },
    editBook: async () => {
        let books = await managBook.ViewAllBook();
        for (let i = 0; i < books.length; i++) {
            const book = books[i];
            console.log(`[${book.id}] ${book.title}`);
        }
        let action = 1
        while ((action)) {
            action = Number(global.prompt("Enter the book ID of the book you want to edit; to return press <Enter>. "))
            console.log(` ---------- `);
            if (action) {
                let book = await managBook.getBookById(action)
                if (book) {
                    for (const property in book) {
                        if (property != "id") {
                            let newValue = global.prompt(`${capitalizeFirstLetter(property)} [${book[property]}]: <Enter>`);
                            if (newValue && Number(newValue) !== 0)
                                book[property] = newValue;
                        }
                    }

                    let newbook = await managBook.editBook(action, book)
                    console.log("Book saved.");
                }

            }
        }
        return
    },
    search: async () => {
        let text = global.prompt(`Search In Titles: `);
        let matchBooks = await managBook.search(text)

        if (matchBooks.length > 0) {
            console.log(`Matches Results ${matchBooks.length} ==> `);

            for (let i = 0; i < matchBooks.length; i++) {
                console.log(` ---------- `);
                for (const property in matchBooks[i]) {
                    console.log(`${capitalizeFirstLetter(property)}: ${matchBooks[i][property]}`);
                }

            }

        }
        else
            console.log(`No Matches`);

        // return
    },
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
