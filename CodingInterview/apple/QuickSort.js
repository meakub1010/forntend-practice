function quickSort(arr, low, hi){
    if(low < hi){
        const pi = partition(arr, low, hi);
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, hi);
    }
    // at this point array is sorted
}

function partition(arr, lo, hi){
    let pivot = arr[hi]; // choose the rightmost element as pivot
    let i = lo -1; // index for the smaller element

    // traverse lo to hi and compare each element with pivot
    for(let j = lo; j <= hi-1; j++){
        if(arr[j] < pivot){
            i++;
            // swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // swap the pivot
    [arr[i+1], arr[hi]] = [arr[hi], arr[i+1]];

    return i+1;
}

const arr = [10, 7, 8, 9, 1, 5];
const n = arr.length;
quickSort(arr, 0, n-1);
console.log("Sorted array: ", arr);


// worst case O(n^2) time complexity
// average case O(n log n) time complexity
// space complexity O(log n) due to recursion stack

// worst case occurs when the array is already sorted or reverse sorted and we always pick the last element as pivot