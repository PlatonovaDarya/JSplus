const totalBooks = document.getElementById("total");
document.addEventListener("DOMContentLoaded", () => {
    loadBooks();
});

function addBook() {
    const input1 = document.getElementById("titleBook");
    const input2 = document.getElementById("author");
    const input3 = document.getElementById("year");
    const bookList = document.getElementById("bookList");
    const li = document.createElement("li");
    li.insertAdjacentHTML(
        "beforeend",
        `
            <span class="btn">${input1.value} ${input2.value} ${input3.value}</span>
                <button onclick="editBook(this)" class="btnGrey" id="through" data-type="readIt">&#128270;</button>
                <button onclick="deleteBook(this)" class="btnRed" data-type="delete">&#10060;</button>
                <button onclick="doneBook(this)" class="btnGreen" data-type="done">&#10004;</button>
            `
    );
    bookList.appendChild(li);
    (input1.value = ""), (input2.value = ""), (input3.value = "");
    saveBooks();
    filterBooks();
}

function deleteBook(button) {
    const li = button.parentElement;
    li.remove();
    saveBooks();
    filterBooks();
}

function editBook(button) {
    const li = button.parentElement;
    const bookText = li.querySelector("span").textContent;
    const newBookText = prompt("Редактировать", bookText);

    if (newBookText !== null && newBookText.trim() !== "") {
        li.querySelector("span").textContent = newBookText.trim();
        saveBooks();
        filterBooks();
    }
}

function saveBooks() {
    const bookList = document.getElementById("bookList");
    const books = Array.from(bookList.children).map(
        (li) => li.querySelector("span").textContent
    );
    totalBooks.innerHTML = books.length;

    localStorage.setItem("books", JSON.stringify(books));
}

function loadBooks() {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const bookList = document.getElementById("bookList");

    totalBooks.innerHTML = books.length;

    books.forEach((book) => {
        const li = document.createElement("li");
        li.insertAdjacentHTML(
            "beforeend",
            `
                <span class="btn">${book}</span>
                    <button onclick="editBook(this)" class="btnGrey" data-type="readIt">&#128270;</button>
                    <button onclick="deleteBook(this)" class="btnRed" data-type="delete">&#10060;</button>
                    <button onclick="doneBook(this)" class="btnGreen" data-type="done">&#10004;</button>
            `
        );
        bookList.appendChild(li);
    });
    filterBooks();
}

function doneBook(button) {
    const li = button.parentElement;
    li.style.setProperty("text-decoration", "line-through");
    saveBooks();
}

function delAllBooks(button) {
    const deleteElement = document.querySelector("#bookList");
    totalBooks.innerHTML = 0;

    deleteElement.innerHTML = "";
}

function filterBooks() {
    const filterBook = document.getElementById("filterBook");
    const filterText = filterBook.value.toLowerCase();
    const bookList = document.getElementById("bookList");

    Array.from(bookList.children).forEach((li) => {
        const bookText = li.querySelector("span").textContent.toLowerCase();
        if (bookText.includes(filterText)) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    });
}

function reloadPage() {
    location.reload();
}








/*document.addEventListener('DOMContentLoaded', () => {
    loadBooks();
});


function addBook() {
    const input1 = document.getElementById('titleBook');
    const input2 = document.getElementById('author');
    const input3 = document.getElementById('year');
    const bookList = document.getElementById('bookList');
    const li = document.createElement('li');
    li.insertAdjacentHTML('beforeend',
        `
            <span class="btn">${input1.value} ${input2.value} ${input3.value}</span>
                <button onclick="editBook(this)" class="btnGrey" id="through" data-type="readIt">&#128270;</button>
                <button onclick="deleteBook(this)" class="btnRed" data-type="delete">&#10060;</button>
                <button onclick="doneBook(this)" class="btnGreen" data-type="done">&#10004;</button>
            `
    );
    bookList.appendChild(li);
    input1.value = '', input2.value = '', input3.value = '';
    saveBooks();
    filterBooks();
}

function deleteBook(button) {
    const li = button.parentElement;
    li.remove();
    saveBooks();
    filterBooks();
}

function editBook(button) {
    const li = button.parentElement;
    const bookText = li.querySelector('span').textContent;
    const newBookText = prompt("Редактировать", bookText);

    if (newBookText !== null && newBookText.trim() !== '') {
        li.querySelector('span').textContent = newBookText.trim();
        saveBooks();
        filterBooks();
    }
}

function saveBooks() {
    const bookList = document.getElementById('bookList');
    const books = Array.from(bookList.children).map(li => li.querySelector('span').textContent);
    localStorage.setItem('books', JSON.stringify(books));
}

function loadBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const bookList = document.getElementById('bookList');

    books.forEach(book => {
        const li = document.createElement('li');
        li.insertAdjacentHTML('beforeend',
            `
                <span class="btn">${book}</span>
                    <button onclick="editBook(this)" class="btnGrey" data-type="readIt">&#128270;</button>
                    <button onclick="deleteBook(this)" class="btnRed" data-type="delete">&#10060;</button>
                    <button onclick="doneBook(this)" class="btnGreen" data-type="done">&#10004;</button>
            `);
        bookList.appendChild(li);
    });
    filterBooks();
}

function doneBook(button) {
    const li = button.parentElement;
    li.style.setProperty("text-decoration", "line-through");
    saveBooks();
}

function delAllBooks(button) {
    const deleteElement = document.querySelector("#bookList");
    deleteElement.innerHTML = '';
}

function filterBooks() {
    const filterBook = document.getElementById('filterBook');
    const filterText = filterBook.value.toLowerCase();
    const bookList = document.getElementById('bookList');

    Array.from(bookList.children).forEach(li => {
        const bookText = li.querySelector('span').textContent.toLowerCase();
        if (bookText.includes(filterText)) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
}*/

