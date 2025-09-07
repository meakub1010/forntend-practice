function fibonacci(n) {
    if (n === 2) return 1;
    else if (n === 1) return 0;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(3)); // Output: 8


function getNthFib(n, memoize = {1: 0, 2: 1}) {
  if(n in memoize){
    return memoize[n];
  }
  else {
    memoize[n] = getNthFib(n-1, memoize) + getNthFib(n-2, memoize);
    return memoize[n];
  }
}
console.log(getNthFib(6)); // Output: 5
console.log(getNthFib(50)); // Output: 7778742049