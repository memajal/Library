
let newBookButton = document.querySelector("#new_book"); //select new Book button
let addBookForm = document.querySelector("#form"); // select form

// display the form when the user click the new book button
    newBookButton.addEventListener("click", function () {
    addBookForm.style.display = "flex";
    }
    );


const myLibrary = [];

function Book( author, title, numOfPages, read) {
    // the constructor function to be called every time the user enter a book
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.read = read;

}

function addBookToLibrary() {
    // store the user input values into the specific variable
    let author = document.querySelector("#author").value;
    let title = document.querySelector("#title").value;
    let numOfPages = document.querySelector("#number_of_pages").value;
    let read = document.querySelector("#read").checked;

    //store the values to the constructor
    let BookAdded = new Book(author, title, numOfPages, read);
    console.log(BookAdded);
}

addBookForm.addEventListener("submit", function () {
    // call the function every time the user click submit
    event.preventDefault();
    addBookToLibrary();
});

