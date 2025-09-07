const twoSum = (nums, target) => {

    const numMap = new Map();
    for(let i = 0; i < nums.length; i++){
        numMap.set(nums[i], i);
    }

    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(numMap.has(complement) && numMap.get(complement) !== i){
            return [i, numMap.get(complement)];
        }
    }
    return [];
}
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]