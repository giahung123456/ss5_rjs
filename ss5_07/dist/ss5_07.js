class Book {
    _id;
    _title;
    _author;
    constructor(_id, _title, _author) {
        this._id = _id;
        this._author = _author;
        this._title = _title;
    }
    get id() {
        return this._id;
    }
    set id(idValue) {
        this._id = idValue;
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
        this._author = authorValue;
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
    fix(idFix, titleEdit, authorEdit) {
        let newBook = this._books.filter((b) => b.id === idFix);
        if (newBook[0]) {
            newBook[0].title = titleEdit;
            newBook[0].author = authorEdit;
        }
    }
}
let book = [];
let library = new Library(book);
let book1 = new Book(1, `a`, `b`);
library.add(book1);
let book2 = new Book(2, `c`, `d`);
library.add(book2);
let book3 = new Book(3, `e`, `f`);
library.add(book3);
let book4 = new Book(4, `g`, `h`);
library.add(book4);
let book5 = new Book(5, `i`, `k`);
library.add(book5);
library.fix(2, `o`, `p`);
library.display();
export {};
//# sourceMappingURL=ss5_07.js.map