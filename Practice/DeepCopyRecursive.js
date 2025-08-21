
function deepCopy(obj){
    if(obj == null || typeof obj != "object"){
        return obj;
    }

    // check for array type
    if(Array.isArray(obj)){
        return obj.map(item => deepCopy(item));
    }

    let copy = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}


let obj = { a: 1, nested: {b:[2,3]}};
let deep = deepCopy(obj);

console.log(deep);
console.log(obj == deep);