const a = [1,2,3,4,5];

console.log(a);

const b = a.map(i => i);
console.log(b);
console.log(a === b); // false because map retunrs new awrray

const c = a.filter(i => i > 2);
console.log(c);
console.log(a === c);// false

const r = a.reduce((acc, n, i, arr) => {acc[i] = n; return acc;}, []);
console.log(r); // [1,2,3,4,5];
console.log(r === a); // false



// BUILD CUSTOM VERSION OF THESE METHODS
console.log('CUSTOM');
Array.prototype.myMap = function (callback){
    const result = [];
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this)); // map(value, index, array)
    }
    return result;
}
const mappedArray = [1,2,3].myMap((val, i, arr) => val + i + arr[1]);
console.log(mappedArray);

Array.prototype.myFilter = function (callback) {
    const result = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }
    }

    return result;
}

const filteredArray = [1,2,3,4,5,6].myFilter((val, i, arr) => (val+i+arr[1]) > 3);

console.log(filteredArray);

Array.prototype.reducedValue = function (callback, initialVal = 0){
    let acc = initialVal? initialVal : 0;

    for(let i = 0; i < this.length; i++){
        if(i === 0 && initialVal === undefined){
            acc = this[i];
        }
        acc = callback(acc, this[i], i, this);
    }

    return acc;
}

const reduced = [1,2,3].reducedValue((acc, val, i, arr) => {
    return acc + val + i + arr[1];
}, 3);

console.log(reduced); //

// FLATTEN AN ARRAY
Array.prototype.myflat = function(depth = Infinity) {
    let flattened = [];
    const flatten = (arr, depth) => {
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i]) && depth > 0){
                flatten(arr[i], depth - 1);
            }
            else {
                flattened.push(arr[i]);
            }
        }
    }
    flatten(this, depth);

    return flattened;
}

console.log([1,2,[3,4,[5,6]]].myflat());


Array.prototype.last = function(){
    if(this.length === 0) return undefined;
    return this[this.length-1];
}
console.log('last',[1,2,3].last());
console.log('last',[].last());