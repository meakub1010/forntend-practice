// proxy in JavaScript

// A Proxy object is used to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation, etc.).

// Example: Creating a simple proxy to log property access

const target = {
    message1: "hello",
    message2: "everyone"
};

const handler = {
    get: function(target, prop, receiver){ // receiver is the proxy or an object that inherits from the proxy, in this case proxy1

        //console.log(target, prop, receiver);

        return prop in target ? target[prop] : `Property ${prop} does not exist`;
    }
}

const proxy1 = new Proxy(target, handler);

console.log(proxy1.message1); // Output: hello
console.log(proxy1.message3); // Output: everyone