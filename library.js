
let newBookButton = document.querySelector("#new_book"); //select new Book button

let addBookForm = document.querySelector("#form"); // select form

// display the form when the user click the new book button
newBookButton.addEventListener("click", function () {
    addBookForm.style.display = "flex";
}
);
