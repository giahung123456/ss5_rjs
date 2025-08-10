class Book {
    _title;
    _author;
    constructor(_title, _author) {
        this._author = _author;
        this._title = _title;
    }
    get title() {
        return this._title;
    }
    set title(titleValue) {
        this._title = titleValue;
    }
    get author() {
        return this._author;
    }
    set author(authorValue) {
        this._title = authorValue;
    }
}
class Library {
    _books;
    constructor(_books) {
        this._books = _books;
    }
    add(bookValue) {
        this._books.push(bookValue);
    }
    display() {
        console.log(this._books);
    }
}
let book = [];
let library = new Library(book);
let book1 = new Book(`a`, `b`);
library.add(book1);
let book2 = new Book(`c`, `d`);
library.add(book2);
let book3 = new Book(`e`, `f`);
library.add(book3);
let book4 = new Book(`g`, `h`);
library.add(book4);
let book5 = new Book(`i`, `k`);
library.add(book5);
library.display();
export {};
//# sourceMappingURL=ss5_06.js.map