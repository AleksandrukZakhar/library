const library = [];
const add = document.getElementById("add");
const inputContainer = document.querySelector(".input-container");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");
const booksContainer = document.querySelector(".books-container");
const form = document.querySelector("form");

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

  const changeRead = document.createElement("input");
  changeRead.setAttribute("type", "checkbox");

  const readElement = document.createElement("p");

  if (!read.checked) {
    readElement.textContent = "I haven't read it yet";
  } else {
    readElement.textContent = "I have read it";
    changeRead.setAttribute("checked", "checked");
  }

  bookContainer.appendChild(readElement);

  const changeReadLabel = document.createElement("label");
  changeReadLabel.textContent = "Have you read it yet";
  changeReadLabel.setAttribute("for", "read");

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

const validate = (el, patternMismatchText, pattern) => {
  const regex = pattern;

  if (el.validity.valueMissing) {
    el.setCustomValidity("Fill this field");
    el.reportValidity();
  } else if (el.validity.tooShort) {
    el.setCustomValidity("Title must be at least 4 characters long");
    el.reportValidity();
  } else if (!regex.test(el.value)) {
    el.setCustomValidity(patternMismatchText);
    el.reportValidity();
  } else el.setCustomValidity("");
};

title.addEventListener("input", () => {
  validate(
    title,
    "Data is invalid it must only contain characters from a to z",
    /[a-z]/gi
  );
});

author.addEventListener("input", () => {
  validate(
    author,
    "Data is invalid it must only contain characters from a to z",
    /[a-z]/gi
  );
});

pages.addEventListener("input", () => {
  validate(
    pages,
    "Data is invalid it must only contain characters from 0 to 9",
    /[0-9]/
  );
});

form.addEventListener("submit", (e) => e.preventDefault());
