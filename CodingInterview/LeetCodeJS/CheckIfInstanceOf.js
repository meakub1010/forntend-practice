const checkIfInstanceOf = (obj, classFunction) => {
    // base case
    if(obj === null || obj === undefined || typeof classFunction !== 'function'){
        return false;
    }

    let proto = Object.getPrototypeOf(obj);

    while(proto !== null){
        if(proto === classFunction.prototype){
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }

    return false;
}

// Time: O(d) | Space: O(1) where d is the depth of the prototype chain

// Example usage:
class A {}
class B extends A {}
class C {}

const bInstance = new B();

console.log(checkIfInstanceOf(bInstance, B)); // true
console.log(checkIfInstanceOf(bInstance, A)); // true
console.log(checkIfInstanceOf(bInstance, C)); // false
console.log(checkIfInstanceOf({}, Object)); // true

console.log(checkIfInstanceOf(null, Object)); // false

console.log(checkIfInstanceOf(bInstance, null)); // false
console.log(checkIfInstanceOf(bInstance, undefined)); // false
console.log(checkIfInstanceOf(bInstance, 'notAFunction')); // false