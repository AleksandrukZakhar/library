const library = [];
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");
const bookContainer = document.querySelector(".book-container");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBook = (book) => library.push(book);

submit.addEventListener("click", () => {
  addBook(new Book(title.value, author.value, pages.value, read.value));

  const book = library[library.length - 1];

  const titleElement = document.createElement("div");
  titleElement.textContent = book.title;
  bookContainer.appendChild(titleElement);

  const authorElement = document.createElement("div");
  authorElement.textContent = book.author;
  bookContainer.appendChild(authorElement);

  const pagesElement = document.createElement("div");
  pagesElement.textContent = book.pages;
  bookContainer.appendChild(pagesElement);

  const readElement = document.createElement("div");
  readElement.textContent = book.read;
  bookContainer.appendChild(readElement);

  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
});
