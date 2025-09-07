const merge = function(intervals){
    intervals.sort((a,b) => a[0]-b[0]);
    const merged = [];

    for(const interval of intervals){
        if(merged.length == 0){
            merged.push(interval);
        }
        else if(merged[merged.length-1][1] >= interval[0]){
            // overlap, neet to merge
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1], interval[1]);
        }
        else {
            merged.push(interval);
        }
    }

    return merged;
}

// Example usage:
const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals)); // Output: [[1,6],[8,10],[15,18]]    

const intervals2 = [[1,4],[4,5]];
console.log(merge(intervals2)); // Output: [[1,5]]

// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(n) for the merged array

