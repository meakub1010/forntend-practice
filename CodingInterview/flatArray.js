// FLATTEN ARRAY CUSTOM

// flat function needs input arr and depth, default depth = Infinity
// create an empty arr
// iterate over the i/p arr elements
// if element is array and depth > 0
// continue calling flatten recusively

function flatten(a, depth = Infinity){
    const flatten = [];
    for(const element of a){
        if(Array.isArray(element) && depth > 0){
            flatten.push(...flatten(element, depth-1));
        }
        else {
            flatten.push(element);
        }
    }
    return flatten;
}

// implement using STACK
// create stack with initial arr elements
// process elements from stack
// if simple non arr element add it to the result arr
// if element type is array type, push them into stack




const a = [1,[2],[3,[4]]];
console.log(a);
console.log(a.flat(Infinity));

const words = ["one","two","three","four","six"];

const groupByLength = words.reduce((acc, word) => {
  const len = word.length;
  if (!acc[len]) acc[len] = [];
  acc[len].push(word);
  return acc;
}, {});

console.log(groupByLength);


// find most freq item
const arr = [1,2,2,3,3,3,4,4,4,4,4];

const freqMap = arr.reduce((acc, num) => {

    acc[num] = (acc[num] || 0) + 1;

    return acc;
}, {});

console.log(freqMap);

let max = 0;

const mostFreq = Object.entries(freqMap).reduce((max, [num, freq]) => {
    return freq > max[1] ? [Number(num), freq] : max;
}, [0,0]);
console.log(mostFreq[0], mostFreq[1]);



// FLATTEN multi-level arrays
console.log("FLATTEN multi-level arrays");
const a1 = [1, [2, [3, [4, 5]]]];
console.log(a1.flat(Infinity));

// USING RECURSIVE FUNCTION
function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val);
    },[])
}
console.log([1,[3,5],[7,[8]]]); // [ 1, [ 3, 5 ], [ 7, [ 8 ] ] ]
console.log(flattenArray([1,[3,5],[7,[8]]])); // [ 1, 3, 5, 7, 8 ]


// USING STACK
// push all items into stack
// process them one by one
// if array type push it back to the stack
// if val then push it to result arr
// finally reverse the result

function flattenWithStack(arr, depth = Infinity){
    const stack = [...arr];
    console.log(typeof stack); // object
    const result = [];

    while(stack.length){
        const next = stack.pop();
        if(Array.isArray(next) && depth > 0){
            stack.push(...next); // use spread to keep flattening
            depth--;
        }
        else {
            result.push(next);
        }
    }

    return result.reverse(); // instead of push if u use unshift then you don't need to reverse
} 

console.log(flattenWithStack([1,[3,5],[7,[8]]]));



// USING GENERATORS
/*

Generators in JavaScript are a special kind of function that can pause execution and 
resume later, producing a sequence of values over time instead of computing them all 
at once.

*/
function* flattenWithGen(a){
    for(const item of a){
        if(Array.isArray(item)){
            yield* flattenWithGen(item);
        }
        else {
            yield item;
        }
    }
}

const a2 = [1, [2, [3, [4, 5]]]];
console.log(a2); // if u print nested arr directly it will just print two levels, rest will be abstracted as [Array]
// use JSON.stringify to print nested array

console.log([...flattenWithGen(a2)]);


// Generator
/*
A generator is a special type of function that can pause execution and resume later, maintaining its context (variables, execution state).

In JavaScript and TypeScript, it's defined using function* and uses the yield keyword to produce values one at a time.

*/


function* countToThree(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = countToThree();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen.next()); // { value: undefined, done: true }


const count3 = countToThree();
let result = count3.next();

while(!result.done){
    console.log(result.value); 
    result = count3.next();
}

// o/p
// 1
// 2
// 3

// use cases of generator

// ID generator


function* idGenerator(){
    let id = 1;
    while(true){
        yield id++;
    }
}
 
const generator = idGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


// passing values into generator
function* calculator(){
    const a = yield;
    const b = yield "Enter second number";

    return a + b;
}
const calc = calculator();
console.log(calc.next()); // Enter first number
console.log(calc.next(10)); // Enter second number
console.log(calc.next(15)); // 25

