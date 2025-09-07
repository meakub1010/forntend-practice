String.prototype.myrepeat = function(n){
    if(n==0) return this;
    let result = this;
    for(let i = 1; i < n; i++){
        result += this;
    }
    return result;
}

console.log("abc".myrepeat(3)); // "abcabcabc"