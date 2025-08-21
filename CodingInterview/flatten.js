function flatten(value){
    // if primitive
    if(typeof value !==  'object' || value === null){
        return value;
    }

    // if object or non primitive 
    // if array
    if(Array.isArray(value)){
        return flattenArray(value);
    }

    return flattenObj(value);
};


function flattenArray(array){
    return array.reduce((acc, num) => acc.concat(flatten(num)) , []);
};

function flattenObj(object){
    const flattenedObj = {};

    for(const [key, value] of Object.entries(object)){
        // value can be value or nested object
        const valueIsObject = typeof value === 'object' && value !== null && !Array.isArray(value);
        const flattenedValue = flatten(value);
        // check if value was primitive or object based on that process the resultant flattened value
        if(valueIsObject){
            Object.assign(flattenedObj, flattenedValue); // mapping flattened value as key value to result object
        }
        else {
            flattenedObj[key] = flattenedValue;
        }
    }
    return flattenedObj;
};

console.log(flatten(1));
console.log(flatten([]));
console.log(flatten([1,[2,3],[4,[5]]]));
console.log(flatten({
    a: null,
    b: undefined,
    c: {
        d: true,
        e: 4,
        f: {},
        g: {
            h: 5
        },
    },
}));
