function sayHello(name, name2) {
    console.log(`${this.greeting} ${name} ${name2}!`);
    console.log(this); // 'this' will be the context object { greeting: 'Hello' }
}
const context = {
    greeting: 'Hello'
}
sayHello.call(context, 'Muhammad', 'Eakub'); // Call with no context, 'this' is undefined


console.log('Using APPLY:');


// APPLY 
// accepts an array of arguments
function greet(name, name2) {
    console.log(`${this.greeting}, ${name} ${name2}!`);
    console.log(this); // 'this' will be the context object { greeting: 'Hello' }
}
const context2 = {
    greeting: 'Hello'
}
greet.apply(context2, ['Muhammad', 'Eakub']); // Apply with no context, 'this' is undefined



console.log('Using BIND:');

// BIND
// creates a new function with a specific context 
// does not execute immediately
function greetWithBind(name, name2) {
    console.log(`${this.greeting}, ${name} ${name2}!`);
    console.log(this); // 'this' will be the context object { greeting: 'Hello' }
}
const context3 = {    greeting: 'Hello'
}
const boundGreet = greetWithBind.bind(context3, 'Muhammad', 'Eakub');
boundGreet(); // Call the bound function, 'this' is the context object { greeting: 'Hello' }
// Output: Hello, Muhammad Eakub!


// SUMMARY:
// call() and apply() invoke functions immediately with a specified context.
// The difference is that call() takes individual arguments, while apply() takes an array of arguments.
// bind() creates a new function with a specified context and does not invoke it immediately.
// It can be useful for creating functions that can be called later with a specific context.
