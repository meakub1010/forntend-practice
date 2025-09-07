const rotate = (nums, k) => {
    // Normalize k to avoid unnecessary rotations
    k = k % nums.length;

    // calculate the new index based on k rotations
    // use temp array to hold the elements in correct position
    const n = nums.length;
    const temp = new Array(n);
    for(let i = 0; i < nums.length; i++){
        temp[(i+k)%n] = nums[i];
    }
    for(let i = 0; i < nums.length; i++){
        nums[i] = temp[i];
    }
    return nums;
}
console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2)); // [3,99,-1,-100]



const rotateSlice = (nums, k) => {
    k = k % nums.length;
    const n = nums.length;
   return nums.slice(-k).concat(nums.slice(0, n-k));
}

console.log(rotateSlice([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotateSlice([-1,-100,3,99], 2)); // [3,99,-1,-100]

const rotateRepeat = (nums, k) => {
    k = k % nums.length;
    for(let i = 0; i < k; i++){
        nums.unshift(nums.pop());
    }
}

console.log(rotateRepeat([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotateRepeat([-1,-100,3,99], 2)); // [3,99,-1,-100]


// Inplace Reversal Algorithm
// [1,2,3,4,5,6,7] k = 3
// output: [5,6,7,1,2,3,4]

// reverse entire array: [7,6,5,4,3,2,1]

// reverse first k elements: [5,6,7,4,3,2,1]

// reverse remaining n-k elements: [5,6,7,1,2,3,4]

const rotateInplace = (nums, k) => {
    k = k % nums.length;

    const reverse = (start, end) => {
        while(start < end){
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    reverse(0, nums.length-1);
    reverse(0, k-1);
    reverse(k, nums.length-1);
}

// Example usage:
const arr1 = [1,2,3,4,5,6,7];
rotateInplace(arr1, 3);
console.log(arr1); // [5,6,7,1,2,3,4]