// javscript data types


// PRIMITIVE data types

// undefined
let a;
console.log(a); // undefined
// Boolean
let isTrue = true;
console.log(isTrue); // true
// Number
let num = 42;
console.log(num); // 42
// String
let str = "Hello, World!";
console.log(str); // Hello, World!
// BigInt
let bigInt = BigInt(1234567890123456789012345678901234567890);
console.log(bigInt); // 1234567890123456789012345678901234567890n
// Symbol
let sym = Symbol("unique");
console.log(sym); // Symbol(unique)
// null
let empty = null;
console.log(empty); // null

const sym1 = Symbol();
const sym2 = Symbol("description");

console.log(sym1 === sym2); // false, each symbol is unique

const s = Symbol("test");
// console.log("Value is " + s); // ❌ TypeError
console.log("Value is " + s.toString()); // ✅ "Value is Symbol(test)"


// STRUCTURAL data types



// Object like Object, Array,Map, Set, WeakMap, WeakSet, Date, Function
// Map
let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }
// Set
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set); // Set(3) { 1, 2, 3 }
// WeakMap
let weakMap = new WeakMap();
let objKey = {};
weakMap.set(objKey, "value");
console.log(weakMap); // WeakMap { <items unknown> }
// WeakSet
let weakSet = new WeakSet();
let objValue = {};
weakSet.add(objValue);
console.log(weakSet); // WeakSet { <items unknown> }    
// Date
let date = new Date();
console.log(date); // Current date and time

// Object
let obj = {
    name: "John",
    age: 30,
    isEmployed: true
};
console.log(obj); // { name: 'John', age: 30, isEmployed: true }
// Array
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
// Function
let func = function() {
    return "This is a function";
}
console.log(func()); // This is a function



// MAP VS WEAKMAP

// Map can have any value as a key, including objects, while WeakMap can only have objects as keys.
// Map is iterable, while WeakMap is not.
// Map holds strong references to its keys and values, while WeakMap holds weak references to its keys, allowing for garbage collection if there are no other references to the key object.
// Map can be serialized (converted to JSON), while WeakMap cannot be serialized because it holds references to objects that may not be serializable.
// Map has a size property that returns the number of key-value pairs, while WeakMap does not have a size property because it is not iterable and does not expose its contents.

const map2 = new Map();
map2.set('a', 1);
map2.set({ key: 'obj' }, 2);

const weakMap2 = new WeakMap();
let obj2 = { id: 123 };
weakMap2.set(obj2, 'secret');

// Now remove all references to `obj`
obj2 = null; // ✅ Can now be garbage collected

// WeakMap is good for storing private data associated with objects, as it allows the garbage collector to reclaim memory if there are no other references to the object.

// SET VS WEAKSET

// Set can have any value as an element, including objects, while WeakSet can only have objects as elements.
// Set is iterable, while WeakSet is not.
// Set holds strong references to its elements, while WeakSet holds weak references to its elements, allowing for garbage collection if there are no other references to the object.
// Set can be serialized (converted to JSON), while WeakSet cannot be serialized because it holds references to objects that may not be serializable.
// Set has a size property that returns the number of elements, while WeakSet does not have a size property because it is not iterable and does not expose its contents.

const set2 = new Set();
set.add(1);
set.add({ id: 1 });

const weakSet2 = new WeakSet();
let user = { name: "Alice" };
weakSet2.add(user);

user = null; // ✅ Can now be garbage collected
// weakSet2 will not prevent the object from being garbage collected

// WeakSet is ideal when you want to keep a list of objects without preventing them from being garbage collected, such as when tracking DOM elements or other objects that may be removed from memory.



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


// ARRAYS
/*
JavaScript arrays are dynamic and sparse. Memory is allocated as elements are added.

const arr = [1, 2, 3];
arr.push(4); // adds more memory
arr[100] = 42; // sparse array, large gap — memory may be allocated differently

Under the hood:

Arrays are backed by contiguous memory initially.

If the array becomes sparse (non-sequential keys), it may degrade to a hash table internally (less performant).

Dynamic resizing happens automatically.

"JavaScript arrays are not like C arrays; 
they are closer to hash maps with integer keys but optimized for sequential integers."

*/


// SET

