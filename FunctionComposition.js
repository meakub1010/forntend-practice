// Function composition in JavaScript
// is a powerful technique that allows you to combine multiple functions into a single function. This is particularly useful for creating more complex operations
//  by chaining simpler functions together.


const compose = (f,g) => x => f(g(x));

const add = a => b => a + b;
const double = x => x * 2;

const doubleAfterAdd5 = compose(double, add(5));
console.log(doubleAfterAdd5(10)); // Output: 30

// add method works like below
//const add2 = add(2);  // a = 2, returns b => 2 + b
//console.log(add2(3)); // b = 3 → returns 2 + 3 → 5


// steps
// add(5)(10) => 15
// double(15) => 30

// compose(double, add(5)) --> x => double(add(5)(x))
// doubleAfterAdd5(10) --> double(add(5)(10))


// ANOTHER EXAMPLE

const addCustomer = fn => (...args) => {
    console.log("Adding customer with args:", args);
    return fn(...args);
};

const processOrder = fn => (...args) =>{
    console.log("Processing order with args:", args);
    return fn(...args);
};

let completeOrder = (...args) => {
    console.log("Completing order with args:", args);
    return `Order completed : ${[...args].toString()}`;
};

let order = processOrder(completeOrder);
let order2 = addCustomer(order);
order2('1000');




// preparing pizza without inheritance
const prepare = () => {
    return {
        prepare: () => console.log('preparing')
    };
}

const bake = () => {
    return {
        bake: () => console.log('baking')
    };
}

const toss = () => {
    return {
        toss: () => console.log('tossing')
    };
}

const ready = () => {
    return {
        ready: () => console.log('ready!')
    };
}

const stuff = () => {
    return {
        stuff: () => console.log('stuffing')
    };
}

const butter = () => {
    return {
        butter: () => console.log('butter')
    };
}

const createPizza = (size, crust, sauce) => {

    const pizza = {
        size: size,
        crust: crust,
        sauce: sauce,
        toppings: []
    }

    return {
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready()
    }

}


const createSalad = (size, dressing) => {
    return {
        size: size,
        dressing: dressing,
        ...prepare(),
        ...toss(),
        ...ready()
    }
}


// COMPOSITION(right to left) VS PIPE(left to right)

const addUp = x => x + 1;
const multiply = x => x * 2;

const compose2 = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const addThenMultiply = compose2(multiply, addUp); // executes right to left
console.log(addThenMultiply(5)); // (5 + 1) * 2 = 12

const multiplyThenAdd = pipe(multiply, addUp); // executes left to right
console.log(multiplyThenAdd(5)); // (5 * 2) + 1 = 11


const composeX = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x) 