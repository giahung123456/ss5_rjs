class Rectangle {
    _width;
    _height;
    constructor(_width, _height) {
        this._height = _height;
        this._width = _width;
    }
    get width() {
        return this._width;
    }
    set width(widthValue) {
        this._width = widthValue;
    }
    get height() {
        return this._height;
    }
    set height(heightValue) {
        this._height = heightValue;
    }
    dienTich() {
        console.log(this._height * this._width);
    }
    chu_vi() {
        console.log((this._height + this._width) * 2);
    }
}
let rectangle = new Rectangle(2, 3);
console.log(`do dai:`);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(`tính`);
rectangle.chu_vi();
rectangle.dienTich();
console.log(`----------`);
console.log(`do dai:`);
rectangle.width = 4;
rectangle.height = 5;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(`tính`);
rectangle.chu_vi();
rectangle.dienTich();
export {};
//# sourceMappingURL=ss5_05.js.map