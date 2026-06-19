const myLibrary = [];

function Book(title, author, year, read, remove) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
    this.remove = document.createElement('button');
    this.remove.innerText = 'Remove';
    this.remove.onclick = () => {
        let index = myLibrary.indexOf(this);
        if (index > -1){
            myLibrary.splice(index, 1);
            displayLibrary();
        }
    }
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, year, read, remove) {
  // take params, create a book then store it in the array
  let book = new Book(title, author, year, read, remove);
  myLibrary.push(book);
  return book;
}

function displayLibrary() {
    const libraryDiv = document.querySelector('.my-library');

    libraryDiv.innerHTML = '';
    
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('bookDiv');
        libraryDiv.appendChild(bookDiv);


        const bookTitle = document.createElement('h3');
        bookTitle.classList.add('info');
        bookDiv.appendChild(bookTitle);
        bookTitle.textContent = `Title: ${book.title}`;

        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('info');
        bookDiv.appendChild(bookAuthor);
        bookAuthor.textContent = `Author: ${book.author}`;

        const bookYear = document.createElement('p');
        bookYear.classList.add('info');
        bookDiv.appendChild(bookYear);
        bookYear.textContent = `Year: ${book.year}`;

        const readLabel = document.createElement('label');
        readLabel.textContent = 'Read ';
        bookDiv.appendChild(readLabel);
        
        const bookRead = document.createElement('input');
        bookRead.type = 'checkbox';
        bookRead.classList.add('info');
        bookRead.checked = book.read;
        bookDiv.appendChild(bookRead);
        bookRead.addEventListener('change', () => {
            book.read = bookRead.checked;
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('removeBtn');
        removeBtn.addEventListener('click', () => {
            const index = myLibrary.indexOf(book);
            if (index > -1){
                myLibrary.splice(index, 1);
                displayLibrary();
            }
        });
        bookDiv.appendChild(removeBtn);
    })
}

const laranjaMecanica = addBookToLibrary('Laranja Mecanica', 'Anthony Burgess', 1980);

const oMundoDeSofia = addBookToLibrary('O Mundo de Sofia', 'Jostein Gaarder', 1980);

const dune = addBookToLibrary('Dune', 'Frank Herbert', 1980);

const duneMesiah = addBookToLibrary('Dune Messiah', 'Frank Herbert', 1981);

const ei = addBookToLibrary('Ei! Tem Alguem Ai', 'Jostein Gaarner', 1980);

//form to add new book
const dialog = document.querySelector('.book-dialog');
const addBtn = document.querySelector('.add');
const cancelBtn = document.querySelector('#cancel-btn');
const form = document.querySelector('.book-form');

addBtn.addEventListener('click', () => {
    dialog.showModal();
});

cancelBtn.addEventListener('click', () => {
    dialog.close();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const year = document.querySelector('#year').value;
    const read = document.querySelector('#read').checked;

    addBookToLibrary(title, author, year, read);

    form.reset();
    dialog.close();

    displayLibrary();
});

console.log(myLibrary);

displayLibrary();