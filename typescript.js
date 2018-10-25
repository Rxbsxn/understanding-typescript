var sum = function (a, b) {
    return a + b;
};
console.log(sum(4, 4));
var isCool = true; // boolean
// Arrays
var array = ['1', '2', '3'];
var array2 = ['2', '1', '3'];
// Objects
var simpleObject = {
    a: 1
};
var undefinedValue = undefined;
var nullValue = null;
// Tuple
var cart = ['Hej', 2];
// Enum
var Size;
(function (Size) {
    Size[Size["SMALL"] = 1] = "SMALL";
    Size[Size["MEDIUM"] = 2] = "MEDIUM";
    Size[Size["LARGE"] = 3] = "LARGE";
})(Size || (Size = {}));
var sizeName = Size[2]; // Medium
var sizeInteger = Size.MEDIUM; // 2
// Any
var variable = true;
variable = 2;
// void function
var printSomething = function () {
    console.log('print something');
};
// return number
var returnFive = function () {
    return 5;
};
// never
var throwErrorFunction = function () {
    throw Error('Hello world');
};
var cars = function (cars) {
    console.log('hi');
};
var cars2 = function (cars) {
    console.log('hi2');
};
var car = {}; // Type assertion
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'allalallal';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello, " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("RAWR");
console.log(lion.greet());
