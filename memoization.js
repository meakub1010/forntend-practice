const multiplyBy10 = (num) => {
    console.log('called for ', num);
    return num * 10;
}

const memoizedMultiplyBy10 = () => {
   const cache = {};

   return (num) => {
    if(num in cache){
        return cache[num];
    }
    console.log('called for ', num);
    cache[num] = num * 10;
    return cache[num];
   }
}

const initApp = () => {
    // console.log(multiplyBy10(10));
    // console.log(multiplyBy10(10));
    // console.log(multiplyBy10(10));
    const multiplyByTen = memoizedMultiplyBy10();
    console.log(multiplyByTen(10));
    console.log(multiplyByTen(10));
    console.log(multiplyByTen(10));
}

initApp();



