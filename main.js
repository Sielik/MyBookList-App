// Book class: Represents a book
class book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI class: Handle UI Tasks
class UI{
    static displayBooks() {
        const storedBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '3434434'
            },
            {
                title: 'Book Two',
                author: 'John Doe',
                isbn: '45545'
            }
        ];
        const books = storedBooks;
        books.forEach((book) => UI.addBookToList(book));

        static addBookToList(book) {
            const list = document.getElementById('book-list');
            const row = document.createElement('tr');
            row.innerHTML = `
            
            `
        }
    }
}

// Sto