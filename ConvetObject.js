let user = {name: "Alice", age: 25, city: "Paris"};

let arr = Object.keys(user).map(key => {
    return `${key}:${user[key]}`;
});
console.log(typeof arr); // object
console.log(arr); // [ 'name:Alice', 'age:25', 'city:Paris' ]

let arr2 = Object.keys(user).map(key => user[key]);
console.log(arr2); // [ 'Alice', 25, 'Paris' ]


let upperCasedValues = Object.keys(user).map(key => {
    return [key, String(user[key]).toUpperCase()];
});
let transformed = Object.fromEntries(upperCasedValues);
console.log(transformed); // { name: 'ALICE', age: '25', city: 'PARIS' }

Object.entries(user).map(([key, value]) => {
    console.log(key, value);
});
// name Alice
// age 25
// city Paris