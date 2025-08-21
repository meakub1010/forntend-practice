
// Array Methods

Array.prototype.myMap = function (callback){
    const result = [];
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
}
const a = [1,2,3,4,5,6];
console.log(a.myMap((val, i, arr) => val + i + arr[1]));

Array.prototype.myFilter = function (callback){
    const result = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }
    }

    return result;
}

console.log(a.myFilter((value, i, arr) => {
    return (value + i + arr[1]) > 5;
}));

Array.prototype.myReduce = function (callback, initialVal) {
    let acc = initialVal? initialVal : 0;

    for(let i = 0; i < this.length; i++){
        acc = callback(acc, this[i], i, this);
    }

    return acc;
}

const reduced = [1,2,3].myReduce((acc, val, i, arr) => {
    return acc + val + i + arr[1];
}, 3);
console.log(reduced);



function debounce(callback, delay, immediate = false){
    let timerID;
    return function(...args){
        clearTimeout(timerID);
        const shouldCallImmediately = timerID == null && immediate;
        if(shouldCallImmediately){
            callback.apply(this, args);
        }

        timerID = setTimeout(() => {
            if(!immediate){
                callback.apply(this, args);
            }
            timerID = null;
        }, delay);
    }
}