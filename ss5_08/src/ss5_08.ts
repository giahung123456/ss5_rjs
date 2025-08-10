class Book {
    private _id:number
    private _title  :string
    private _author:string
    constructor(_id:number,_title:string,_author:string){
        this._id=_id
        this._author=_author
        this._title=_title
    }
    get id(){
        return this._id
    }
    set id(idValue:number){
        this._id=idValue
    }
    get title(){
        return this._title
    }
    set title(titleValue:string){
        this._title=titleValue
    }
    get author(){
        return this._author
    }
    set author(authorValue:string){
        this._author=authorValue
    }

}
class Library {
    _books:Book[]
    constructor(_books:Book[]){
        this._books=_books
    }

    add(bookValue:Book){
        this._books.push(bookValue)

    }
    hienThi(){
        console.log(this._books);
        
    }
    sua(idSua:number,titleEdit:string,authorEdit:string){

       let newBook:Book[]= this._books.filter((b)=>b.id===idSua)
       
        console.log(newBook[0]);
        
       
       
       
        
        
    }

}
let book:Book[]=[]
let library=new Library(book)
let book1=new Book(1,`a`,`b`)
library.add(book1)
let book2=new Book(2,`c`,`d`)
library.add(book2)
let book3=new Book(3,`e`,`f`)
library.add(book3)
let book4=new Book(4,`g`,`h`)
library.add(book4)
let book5=new Book(5,`i`,`k`)
library.add(book5)

library.sua(2,`o`,`p`)



library.hienThi()
