const myLibrary = [];

function Book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, year, read) {
  // take params, create a book then store it in the array
  let book = new Book(title, author, year, read);
  myLibrary.push(book);
  return book;
}

const laranjaMecanica = addBookToLibrary('Laranja Mecanica', 'Anthony Burgess', 1980, 'read')