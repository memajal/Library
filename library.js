
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
    myLibrary.push(BookAdded);
    displayBook(); 
}

// for every element added in the Library dispay a specific card div with its data
function displayBook() {
    let bookDisplayDiv = document.querySelector("#book_display");
    bookDisplayDiv.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book_i = myLibrary[i];
        let book_i_card = document.createElement("div");
        book_i_card.id = "book_card";
        book_i_card.innerHTML = `
         <h2> Author:  ${book_i.author} </h2>
         <h3> Title: ${book_i.title} </h3>
         <h4> Pages: ${book_i.numOfPages} </h4>
         <div id="card_buttons">
         <button id="toogle_button" onclick="toogleButton(${i})">  ${book_i.read ? "Read" : "Not Read"}</button>
         <button id="delete_button" onclick="removeBook(${i})"> <i class="fa fa-trash-o" style="font-size:20px"></i> </button>
         </div>`

        bookDisplayDiv.appendChild(book_i_card);
    }
}


Book.prototype.toogleButton = function () {
    this.read = !this.read;
}

function toogleButton(index) {
    myLibrary[index].toogleButton();
    displayBook();

}

// remove a book when the delete button is clicked
function removeBook(index) {
    
    myLibrary.splice(index, 1);
    displayBook();
}


addBookForm.addEventListener("submit", function () {
    // call the function every time the user click submit
    event.preventDefault();
    addBookToLibrary();
});
