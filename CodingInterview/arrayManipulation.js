// flaten deeply nested array

function flattenArray(a){

    return a.reduce((acc, v) => {
        return Array.isArray(v) ? acc.concat(flattenArray(v)) : acc.concat(v)
    }, []);
}

console.log(flattenArray([1,2,[3],[4,[5,[6]]]]));


// Group by object by property age

const people = [
    {name: "Yusuf", age: 21},
    {name: "Ishmael", age: 31},
    {name: "Nayam", age: 21},
    {name: "Eakub", age: 31},
    {name: "Muhammad", age: 21},
    {name: "Rahman", age: 21},
    {name: "Rahman", age: 21},
];

function groupBy(a, prop){
    return a.reduce((acc, item) => {
        const key = item[prop];
        acc[key] = acc[key] || [];
        acc[key].push(item);
        return acc;
    } ,{});
}

console.log("Group by");

console.log(groupBy(people, 'name'));



// Remove duplicates - deep equality
const a1 = [{ a: 1 }, { a: 1 }, { b: 2 }];

function deepUnique(a){
    const seen = new Set();
    return a.filter(item => {
        const serialized = JSON.stringify(item);
        if(seen.has(serialized)) return false;
        seen.add(serialized);
        return true;
    });
}

console.log("Unique elems from array");
console.log(deepUnique(a1));

// SPLIT array into CHUNK of specific size
// iterate the array and increment by size
// use array.slice


function chunkArray(a, size){
    const result = [];
    for(let i = 0; i < a.length; i += size){
        result.push(a.slice(i, i+size));
    }
    return result;
}

console.log('chunk: ',chunkArray([1,2,3,4,5,6,7,8,8,9,0,1,3,4,6], 4));

// Find intersection of two arrays
// put one arr in set
// for other arr iterate and filter if the set has that element

function intersection(a,b){
    const set2 = new Set(a);
    return b.filter(item => set2.has(item));
}
console.log('intersection');
console.log(intersection([1,3,5,7,8],[1,5,9,10,11]));


// CUSTOM SORT BY FREQ
// create freq obj 
// then arr sort

function customSort(a){
    const freq = {};
    a.forEach(element => {
      freq[element] = (freq[element] || 0) + 1;  
    });
    return a.sort((a,b) => freq[b]-freq[a] || a-b);
}

console.log('custom sort');
console.log(customSort([4,6,2,6,4,4,1]));


// ROTATE an Array (K steps)
// [1,2,3,4,5] => [4,5,1,2,3] for k = 2

// slice the array and concat based on k

function rotate(a, k){
   k = k % a.length; // modulus helps if k is greater than the length
   console.log(`k = ${k}`)
   return a.slice(-k).concat(a.slice(0, -k)); // a.slice(0, -k) elements before last k elements | a.slice(-k) last k elements
}

console.log('Rotate');
const a2 = [1,2,3,4,5,6,7,8,9,10];
console.log(rotate(a2, 15));



// ADD SUM function to JS array type


Object.defineProperty(Array.prototype, 'sum', {
    value: function () {
        return this.reduce((acc, val) => acc + val,0);
    },
    enumerable: false // hide from for in loops
});
console.log([1,2,3,-3,-2].sum()); // 1


Array.prototype.multiply = function (){
    return this.reduce((acc, val) => acc * val, 1)
}
console.log([1,2,3,4,5].multiply()); // 120

// Modification of built-in object is not RECOMMENDED because
// It can cause conflicts with other libraries.

// Future JS versions may define the same method name differently.

// It can lead to unexpected bugs.

// Instead prefer utility function
const sum = arr => arr.reduce((acc, val) => acc + val, 0);