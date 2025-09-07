const filter = (arr, fn) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

const callBack = (num, i) => {
    return num > i;
}

console.log(filter([-1,0,9,8,2,1], callBack)); // [ 9, 8 ]