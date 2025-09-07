const firstDuplicate = function(str) {
    const s = new Set();
    for(let i = 0; i < str.length; i++){
        let c = str.charAt(i);
        if(s.has(c)){
            return c;
        }
        else {
            s.add(c);
        }
    }

    return null;
}

console.log(firstDuplicate("abca"));
console.log(firstDuplicate("abc"));