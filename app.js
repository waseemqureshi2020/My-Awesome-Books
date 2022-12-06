let books = [];

const awesomeBooks = document.getElementById('awesomeBooks');

function updateLocalstorage() {
  localStorage.setItem('bookLibrary', JSON.stringify(books));
}

function remove(id) {
  books = books.filter((book) => book.id !== id);
  updateLocalstorage();
}

function removeDom(element) {
  element.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const parent = e.target.parentNode;
      remove(parent.id);
      parent.remove();
    });
  });
}

function render(book) {
  awesomeBooks.innerHTML += `
      <li class="entry" id="${book.id}">
        <p>"${book.title}" by ${book.author}</p>
        <button class="btn">Remove</button>
      </li>
    
      `;
  removeDom(awesomeBooks);
}

function add(book) {
  render(book);
  books.push(book);
  removeDom(awesomeBooks);
  updateLocalstorage();
}

document.querySelector('form').onsubmit = (e) => {
  e.preventDefault();
  const error = document.getElementById('error');
  const { title, author } = e.target;
  if (title.value.length < 1 || author.value.length < 1) {
    error.innerHTML = 'input filed must not be empty';
    setTimeout(() => {
      error.innerHTML = '';
    }, 3000);
  } else {
    error.innerHTML = '';
    add({
      id: Date.now().toString(),
      title: title.value,
      author: author.value,
    });
    title.value = '';
    author.value = '';
  }
};

if (localStorage.getItem('bookLibrary')) {
  books = JSON.parse(localStorage.getItem('bookLibrary'));
} else {
  localStorage.setItem('bookLibrary', JSON.stringify([]));
}

books.forEach((book) => render(book));