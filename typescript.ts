const sum = (a: number, b: number) => {
  return a + b;
}

console.log(sum(4, 4));


let isCool: boolean = true; // boolean


// Arrays
let array: string[] = ['1', '2', '3'];
let array2: Array<string> = ['2', '1', '3'];


// Objects

let simpleObject: object = {
  a: 1
}

let undefinedValue: undefined = undefined;
let nullValue: null = null;


// Tuple

let cart: [string, number] = ['Hej', 2];

// Enum

enum Size {
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
}

let sizeName: string = Size[2]; // Medium
let sizeInteger: number = Size.MEDIUM // 2

// Any

let variable: any = true;
variable = 2;


// void function

let printSomething = (): void => {
  console.log('print something');
}

// return number

let returnFive = (): number => {
  return 5;
}

// never

let throwErrorFunction = (): never => {
  throw Error('Hello world');
}

// interface

interface Car {
  brand: string,
  isNew: boolean
}

let cars = (cars: Car) => {
  console.log('hi');
}

let cars2 = (cars: { brand: string, isNew: boolean }) => {
  console.log('hi2');
}


let car = {} as Car; // Type assertion


interface Dog {
  type?: string // type is optional
}


// Class

class Animal {
  sing: string = 'allalallal';
  private name: string = 'a';

  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `Hello, ${this.sing}`;
  }
}

const lion = new Animal("RAWR");

console.log(lion.greet());

// lion.name -> Name is private variable of the instance
