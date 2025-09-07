const createHelloWorld = function(){

    return (...args) => "Hello World"
}

const f = createHelloWorld();

console.log(f()); // Hello World
console.log(f(1,3,4,5)); // Hello World
console.log(f([{}, {}, []])); // Hello World