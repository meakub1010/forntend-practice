const flat = (arr, n) => {
    if(n === 0) return arr;

    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i]) && n > 0){
            result = result.concat(flat(arr[i], n-1));
        }
        else {
            result.push(arr[i]);
        }
    }

    return result;

};

// Time: O(n) | Space: O(n)
console.log(flat([1,2,[3,4,[5,6]]], 1)); // Output: [1,2,3,4,[5,6]]
console.log(flat([1,2,[3,4,[5,6]]], 2)); // Output: [1,2,3,4,5,6]
console.log(flat([1,2,[3,4,[5,6]]], 0)); // Output: [1,2,[3,4,[5,6]]]
console.log(flat([1,2,[3,4,[5,6]]], 3)); // Output: [1,2,3,4,5,6]
console.log(flat([1,2,[3,4,[5,6]]], Infinity)); // Output: [1,2,3,4,5,6]