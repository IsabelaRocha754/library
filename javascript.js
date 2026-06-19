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

//theme toggle
const themeBtn = document.querySelector('.theme');
const icon = document.querySelector('.theme svg');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')){
        icon.innerHTML = '<path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" />';
    }
    else{
        icon.innerHTML = '<path d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" />';
    }
});