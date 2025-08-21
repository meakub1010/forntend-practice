
// PASSING VALUE VS REFERENCE
// In JavaScript, there are two ways to pass data: by value and by reference.
// In JavaScript, primitive data types (like numbers, strings, booleans, null, undefined, and symbols) are passed by value.
// This means that when you assign a primitive value to a variable or pass it to a function, a copy of the value is made.
// Any changes made to that copy do not affect the original value.
let x = 10;
let y = x; // y is a copy of x
y = 20; // Changing y does not affect x
console.log(x); // Output: 10

// structural data types (like objects, arrays, functions, maps, sets, weakmaps, and weaksets) are passed by reference.
// This means that when you assign an object to a variable or pass it to a function,
// you are actually passing a reference to the original object, not a copy.
let o1 = { name: "Alice" };
let o2 = o1; // o2 is a reference to o1
o2.name = "Bob"; // Changing o2 affects o1
console.log(o1.name); // Output: Bob
console.log(o2.name); // Output: Bob

let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 is a reference to arr1
arr2.push(4); // Changing arr2 affects arr1
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]


// Mutability
// In JavaScript, mutability refers to whether an object can be changed after it is created.
// Mutable objects can be modified, while immutable objects cannot be changed after they are created.
// Mutable objects include arrays, objects, and functions. You can add, remove, or change properties or elements in these objects.
// Immutable objects include strings, numbers, and booleans. Once created, you cannot change their value.
// Instead, you create a new value when you want to change them.

// primitive types are immutable
let str = "Hello";
str[0] = "h"; // This does not change the original string
console.log(str); // Output: "Hello"    
console.log(str[0]); // Output: "H"


// reassigning a new value to a variable does not change the original value
let num = 42;
num = 100; // This creates a new value, does not change the original value
console.log(num); // Output: 100
// what happen to the original value?
// The original value of `num` (42) is still in memory, but it is no longer referenced by the variable `num`.
// If there are no other references to that value, it may be garbage collected by the JavaScript engine.
// However, if you had another variable referencing the original value, that variable would still hold the value 42.
// For example:
let originalNum = 42;
let num2 = originalNum; // num2 is a copy of originalNum
num2 = 100; // This does not change originalNum
console.log(originalNum); // Output: 42
// In this case, `originalNum` still holds the value 42, while `num2` now holds the value 100.

// Mutable objects can be changed
// Structures contain mutable objects or data
let arr = [1, 2, 3];
arr.push(4); // This modifies the original array
console.log(arr); // Output: [1, 2, 3, 4]   
// Objects can also be modified
let obj = { name: "Alice" };
obj.age = 30; // This modifies the original object
console.log(obj); // Output: { name: "Alice", age: 30 } 
// Functions can also be modified
function greet() {
    console.log("Hello");
}
greet(); // Output: Hello
greet = function() {
    console.log("Hi");
}
greet(); // Output: Hi




// Shallow vs Deep Copy
// In JavaScript, when you copy an object or an array, you can create either a shallow copy or a deep copy.
// A shallow copy creates a new object or array, but it only copies the top-level properties or elements.
// If the original object or array contains nested objects or arrays, the shallow copy will still reference those nested objects or arrays.

// A deep copy creates a new object or array and recursively copies all properties or elements, including nested objects or arrays.
// This means that the deep copy will not reference any of the nested objects or arrays in the original object or array.

//// Shallow Copy
// A shallow copy can be created using the spread operator or Object.assign()

// shallow copy using spread operator
let yArray = [1, 2, 3];
let shallowCopyArray = [...yArray, 10, 11]; // Using spread operator
console.log(shallowCopyArray); // Output: [1, 2, 3, 10, 11]
console.log(yArray); // Output: [1, 2, 3]
console.log(shallowCopyArray === yArray); // Output: false, they are different arrays

// shallow copy using Object.assign()
let yObject = { a: 1, b: 2 };
let shallowCopyObject = Object.assign({}, yObject, { c: 3 }); // Using Object.assign()
console.log(shallowCopyObject); // Output: { a: 1, b: 2, c: 3 }
console.log(yObject); // Output: { a: 1, b: 2 }
console.log(shallowCopyObject === yObject); // Output: false, they are different objects

// Shallow copy of an object with nested properties
let nestedObject = { a: 1, b: { c: 2 } };
let shallowCopyNestedObject = { ...nestedObject }; // Shallow copy
console.log(shallowCopyNestedObject); // Output: { a: 1, b: { c: 2 } }
console.log(nestedObject === shallowCopyNestedObject); // Output: false, they are different objects
console.log(shallowCopyNestedObject.b === nestedObject.b); // Output: true, they reference the same nested object

// Modifying the nested object in the shallow copy will affect the original object
shallowCopyNestedObject.b.c = 3;
console.log(nestedObject.b.c); // Output: 3, original object is affected    
console.log(shallowCopyNestedObject.b.c); // Output: 3, shallow copy is also affected


// const vArray = [...yArray]; // Shallow copy of an array
// console.log(vArray); // Output: [1, 2, 3]
// console.log(vArray === yArray); // Output: false, they are different arrays 
// vArray.push(4); // Modifying the shallow copy
// console.log(vArray); // Output: [1, 2, 3, 4]
// console.log(yArray); // Output: [1, 2, 3], original array is unaffected 

yArray.push([8,9,10]);
const vArray = [...yArray]; // Shallow copy of an array
console.log(vArray); // Output: [1, 2, 3]
//vArray[3].push(4); // Modifying the shallow copy
console.log(vArray === yArray); // Output: false, they are different arrays 

console.log(vArray); // Output: [1, 2, 3, 4]
console.log(yArray); // Output: [1, 2, 3], original array is unaffected 

// with shallow copy, if you modify the nested array, it will affect the original array
vArray[3].push(4); // Modifying the shallow copy
console.log(vArray); // Output: [1, 2, 3, 4, 8, 9, 10]
console.log(yArray); // Output: [1, 2, 3, 4, 8, 9, 10], original array is also affected

// Array.from(yArray); // Shallow copy of an array using Array.from()
// Array.slice(0); // Shallow copy of an array using slice()


// Object.freeze()
// Object.freeze() can be used to create a shallow copy of an object that cannot be modified.

const scoreObj = { 
    first: 44,
    second: 55,
    third: {"a": 66, "b": 77},
 };

const frozenScoreObj = Object.freeze(scoreObj); // Shallow copy that cannot be modified

console.log(frozenScoreObj); // Output: { first: 44, second: 55, third: { a: 66, b: 77 } }
// Attempting to modify the frozen object will not work
frozenScoreObj.first = 100; // This will not change the original object
frozenScoreObj.third.a = 99; // This will change the original object either

console.log(scoreObj.first); // Output: 44, original object is unaffected
console.log(scoreObj.third.a); // Output: 66, original object is unaffected

console.log(frozenScoreObj.first); // Output: 44, frozen object is also unaffected
console.log(frozenScoreObj); // Output: 44, frozen object is also unaffected
console.log(scoreObj); // Output: 66, nested object is still
console.log(frozenScoreObj === scoreObj); // Output: true, they are the same object reference


// so we can't prevent changes to nested objects in a shallow copy.
// To prevent changes to nested objects, we need to create a deep copy.

// Deep Copy
// A deep copy can be created using JSON methods or libraries like Lodash.

// Deep copy using JSON methods
const deepCopyScoreObject = JSON.parse(JSON.stringify(scoreObj));


