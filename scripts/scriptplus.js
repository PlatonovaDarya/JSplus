
document.addEventListener('DOMContentLoaded', () => {
    loadBooks();
});


function addBook() {
    const input1 = document.getElementById('titleBook');
    const input2 = document.getElementById('author');
    const input3 = document.getElementById('year');

    if (input1 === '', input2 === '', input3 === '') {
        return;
    }

    const bookList = document.getElementById('bookList');
    const li = document.createElement('li');
    li.insertAdjacentHTML('beforeend',
        `<li class="point">
            <span class="btn">${input1.value} ${input2.value} ${input3.value}
                <button onclick="editBook(this)" class="btnGreen" id="through" data-type="readIt">&check;</button>
                <button onclick="deleteBook(this)" class="btnRed" data-type="delete">&times;</button>
            </span>
        </li>`
    );
    bookList.appendChild(li);
    saveBooks();
    input1.value = '', input2.value = '', input3.value = '';
}

function deleteBook(button) {
    const li = button.parentElement;
    li.remove();
    saveBooks();
}

function editBook(button) {
    const li = button.parentElement;
    const bookText = li.querySelector('span').textContent;
    const newBookText = prompt("Редактировать", bookText);

    if (newBookText !== null && newBookText.trim() !== '') {
        li.querySelector('span').textContent = newBookText.trim();
        saveBooks();
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
            `<li class="point">
                <span class="btn">${book}
                    <button onclick="editBook(this)" class="btnGreen" data-type="readIt">&check;</button>
                    <button onclick="deleteBook(this)" class="btnRed" data-type="delete">&times;</button>
                </span>
            </li>`);
        bookList.appendChild(li);
    });
}

