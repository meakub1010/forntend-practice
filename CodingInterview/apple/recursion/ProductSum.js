function productSum(array, multiplier = 1) {
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            sum += productSum(array[i], multiplier + 1);
        }
        else {
            sum += array[i];
        }
    }

    return sum * multiplier;
}

// Time: O(n) | Space: O(d) where d is the depth of the nested arrays


console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])); // Output: 12
// 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4) = 12
