const library = [];
const add = document.getElementById("add");
const inputContainer = document.querySelector(".input-container");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");
const booksContainer = document.querySelector(".books-container");

add.addEventListener("click", () =>
  inputContainer.classList.replace("hide", "show")
);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBook = (book) => library.push(book);

submit.addEventListener("click", () => {
  addBook(new Book(title.value, author.value, pages.value, read.value));
  inputContainer.classList.replace("show", "hide");

  const book = library[library.length - 1];

  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book-container");

  const titleElement = document.createElement("p");
  titleElement.textContent = `Title: ${book.title}`;
  bookContainer.appendChild(titleElement);

  const authorElement = document.createElement("p");
  authorElement.textContent = `Author: ${book.author}`;
  bookContainer.appendChild(authorElement);

  const pagesElement = document.createElement("p");
  pagesElement.textContent = `Pages: ${book.pages}`;
  bookContainer.appendChild(pagesElement);

  const readElement = document.createElement("p");

  if (!read.checked) {
    readElement.textContent = "I haven't read it yet";
  } else {
    readElement.textContent = "I have read it";
  }

  bookContainer.appendChild(readElement);

  const changeReadLabel = document.createElement("label");
  changeReadLabel.textContent = "Have you read it yet";
  changeReadLabel.setAttribute("for", "read");

  const changeRead = document.createElement("input");
  changeRead.setAttribute("type", "checkbox");

  changeRead.addEventListener("click", () => {
    if (changeRead.checked) {
      readElement.textContent = "I have read it";
    } else {
      readElement.textContent = "I haven't read it yet";
    }
  });

  changeReadLabel.appendChild(changeRead);
  bookContainer.appendChild(changeReadLabel);

  const remove = document.createElement("button");
  remove.textContent = "remove";
  remove.addEventListener("click", () => remove.parentNode.remove());
  bookContainer.appendChild(remove);

  booksContainer.appendChild(bookContainer);

  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
});
