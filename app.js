let books = [];

const addBook = (titl, autho) => {
	let temp = {
		title: titl,
		author: autho
	};

	books.push(temp);
};

const removeBook = (i) => {
	books.splice(i, 1);
};

const showBooks = () => {
	const bookContainer = document.querySelector('.book-container');

	for (let i = 0; i < books.length; i += 1) {
    bookContainer.innerHTML += `
      <p>${books[i].title}</p>
      <p>${books[i].author}</p>
      <button id="${i}" class="remBtn" type='button'>Remove</button>
      <hr>
    `;
  }
};

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
	const tInp = document.querySelector('.title-inp').value;
  const aInp = document.querySelector('.author-inp').value;
  addBook(tInp, aInp);

	showBooks();
});