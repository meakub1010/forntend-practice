const topKFrequent = function(nums, k){
    const freqMap = new Map();
    let i = 0;
    for(const num of nums){
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    } // O(n)

    // create buckets where index is frequency
    const buckets = Array(nums.length + 1).fill().map(() => []); // O(n) space and time

    for(const [num, freq] of freqMap.entries()){
        buckets[freq].push(num);
    }
    
    // gather top k frequent elements
    // here highest freq mean highest index
    const result = [];
    for(let i = buckets.length - 1; i >= 0 && result.length < k; i--){
        if(buckets[i].length > 0){
            result.push(...buckets[i]);
        }
    } //O(n) collecting k elements in worst case

    return result.slice(0, k);
}

///console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
console.log(topKFrequent([3,0,1,0], 1));