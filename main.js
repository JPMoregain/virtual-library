let myLibrary = [
    {
      name: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      pages: '277',
      read: 'no'  
    }
];

function Book() {

}

function addBook(obj) {
    myLibrary.push(obj);
}

function display(array) {
    array.forEach(book => {
        console.log(book.name);
    });
}

display(myLibrary);