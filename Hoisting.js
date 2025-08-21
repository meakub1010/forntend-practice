sayHello(); // ✅ Works — function declaration is hoisted

function sayHello() {
    console.log("Hello World!");
}

console.log(a); // ❌ undefined, but no error
var a = 10;
console.log(a); // 10

// above will be converted to

var a;        // declaration moved to top
console.log(a); // undefined
a = 10;       // assignment happens here
console.log(a); // 10





console.log(b); // ❌ ReferenceError
let b = 20;

console.log(c); // ❌ ReferenceError
const c = 30;
