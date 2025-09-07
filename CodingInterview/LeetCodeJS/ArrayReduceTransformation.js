const reduce = function(nums, fn, init) {
    const arr = nums;
    let acc = init;

    arr.forEach((elem, index) => {
        acc = fn(acc, elem)
    });

    return acc;

}

const fn = function sum(acc, curr){ return acc + curr * curr };

console.log(reduce([1,2,3,4], fn, 0)); // 10
console.log(reduce([1,2,3,4], fn, 100)); // 130