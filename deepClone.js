// instead of using external libraries like lodash, you can create a deep clone function



const deepClone = (obj) => {
    if( obj === null || typeof obj != 'object'){
        return obj
    }

    const newObj = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        const value = obj[key];
        newObj[key] = deepClone(value);
    }

    return newObj;
}

// Example usage
const original = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};
const cloned = deepClone(original);
cloned.name = "Bob"; // Modify the cloned object
cloned.hobbies.push("cooking"); // Modify the hobbies array in the cloned object
cloned.address.city = "New Wonderland"; // Modify the city in the cloned object
console.log(original); // Original object remains unchanged
console.log(cloned); // Cloned object reflects the changes

console.log(original === cloned); // false, they are different objects
console.log(original.hobbies === cloned.hobbies); // false, they are different arrays
console.log(original.address === cloned.address); // false, they are different objects
console.log(original.address.city); // "Wonderland", original object remains unchanged
console.log(cloned.address.city); // "New Wonderland", cloned object reflects the change
console.log(original.hobbies); // ["reading", "gaming"], original object remains unchanged
console.log(cloned.hobbies); // ["reading", "gaming", "cooking"], cloned object reflects the change
