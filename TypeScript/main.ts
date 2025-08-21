let myName: string;
myName = 'Dave';

let myAge = 30;
let isEmployed = true;
let hobbies: string[] = ['Reading', 'Gaming', 'Hiking'];

let o = "test" as const;
// o = "test2"; // This will cause a TypeScript error because 'o' is a constant


let album : any;

album = {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973,
    tracks: ["Speak to Me", "Breathe", "On the Run"]
};

album = "The Wall"; // This is allowed because 'album' is of type 'any'
let album2: unknown;
album2 = {
    title: "Abbey Road",
    artist: "The Beatles",
    year: 1969,
    tracks: ["Come Together", "Something", "Octopus's Garden"]
};
// album2.title; // Error 'album2' is of type 'unknown'


if(album2 && typeof album2 === 'object' && album2 !== null && 'title' in album2) {
    console.log(album2.title); // This is safe because we checked the type
}


// album2 = "Revolver"; // This will cause a TypeScript error because 'album2' is of type 'unknown'


const sum = (a: number, b: string) => {
    return a + b; // this return string concatenation, not addition
}

console.log(sum(5, "10")); // Output: "510"


let re: RegExp = /^[0-9]/;



// Arrays, Objects, Enums and Tuples
let numbers: number[] = [1, 2, 3, 4, 5];
let mixedArray: (number | string)[] = [1, 'two', 3, 'four', 5];

let person: { name: string; age: number } = { name: 'Alice', age: 25 };

let personWithOptional: { name: string; age?: number } = { name: 'Bob' }; // age is optional
personWithOptional.name = 'John'; // This is valid

let personWithReadonly: { readonly id: number; name: string } = { id: 1, name: 'Charlie' };
//personWithReadonly.id = 2; // This will cause a TypeScript error because 'id' is readonly

// Enums
enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}               
let direction: Direction = Direction.Up;    

// Tuples
let myTuple: [string, number, boolean] = ['John', 30, true];
console.log(typeof myTuple); // Output: object

myTuple[0] = 'Jane'; // This is valid
//myTuple[1] = 'thirty'; // This will cause a TypeScript error  
