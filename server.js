global.prompt = require('prompt-sync')({ sigint: true });
const promptController = require('./core/business/prompt-controller')

let mainQuestion = "==== Book Manager ==== \n 1) View all books\n 2) Add a book\n 3) Edit a book\n 4) Search for a book\n 5) Save and exit ";
let Exit = false;

// Get user input & Convert the string input to a number
console.log(mainQuestion);
let choice = Number(prompt(`Choose [1-5]:`));
trySwitch(choice)




async function trySwitch(choice) {
  switch (choice) {
    case 1:
      console.log("==== View Books ====");
      await promptController.viewAllBooks()
      break;
    case 2:
      console.log("==== Add a Book ====");
      await promptController.addBook()
      break;
    case 3:
      console.log("==== Edit a Book ====");
      await promptController.editBook()
      break;
    case 4:
      console.log('==== Search ====');
      await promptController.search()
      break;
    case 5:
      console.log('Library saved.');
      Exit = true;
      break;
  }
  if (!Exit) {
    console.log(mainQuestion);
    ch = Number(prompt(`Choose [1-5]:`));
    trySwitch(ch)
  }

}


