"use strict";
let myName;
myName = 'Dave';
let myAge = 30;
let isEmployed = true;
let hobbies = ['Reading', 'Gaming', 'Hiking'];
let o = "test";
// o = "test2"; // This will cause a TypeScript error because 'o' is a constant
let album;
album = {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973,
    tracks: ["Speak to Me", "Breathe", "On the Run"]
};
album = "The Wall"; // This is allowed because 'album' is of type 'any'
let album2;
album2 = {
    title: "Abbey Road",
    artist: "The Beatles",
    year: 1969,
    tracks: ["Come Together", "Something", "Octopus's Garden"]
};
// album2.title; // Error 'album2' is of type 'unknown'
if (album2 && typeof album2 === 'object' && album2 !== null && 'title' in album2) {
    console.log(album2.title); // This is safe because we checked the type
}
// album2 = "Revolver"; // This will cause a TypeScript error because 'album2' is of type 'unknown'
const sum = (a, b) => {
    return a + b; // this return string concatenation, not addition
};
console.log(sum(5, "10")); // Output: "510"
let re = /^[0-9]/;
// Arrays, Objects, Enums and Tuples
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, 'two', 3, 'four', 5];
let person = { name: 'Alice', age: 25 };
let personWithOptional = { name: 'Bob' }; // age is optional
personWithOptional.name = 'John'; // This is valid
let personWithReadonly = { id: 1, name: 'Charlie' };
//personWithReadonly.id = 2; // This will cause a TypeScript error because 'id' is readonly
// Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
let direction = Direction.Up;
// Tuples
let myTuple = ['John', 30, true];
console.log(typeof myTuple); // Output: object
myTuple[0] = 'Jane'; // This is valid
//myTuple[1] = 'thirty'; // This will cause a TypeScript error  
//# sourceMappingURL=main.js.map