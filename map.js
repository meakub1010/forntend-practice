// Create a Map
const actions = new Map();

// Store functions
actions.set('sayHello', () => 'Hello World!');
actions.set('multiply', (a, b) => a * b);

// Retrieve & execute
console.log(actions.get('sayHello')()); // "Hello World!"
console.log(actions.get('multiply')(5, 4)); // 20
