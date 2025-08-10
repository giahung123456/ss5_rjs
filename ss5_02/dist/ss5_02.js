class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    greet() {
        console.log(`${this.id} ${this.age} ${this.email}`);
    }
}
let arr = [];
let student1 = new Student(1, 18, `n@gmail.com`);
arr.push(student1);
let student2 = new Student(2, 18, `h@gmail.com`);
arr.push(student2);
console.log(arr);
export {};
//# sourceMappingURL=ss5_02.js.map