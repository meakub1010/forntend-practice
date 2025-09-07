var join = function(arr1, arr2) {
    const map = new Map();
    for(let i = 0; i < arr1.length; i++){
        map.set(arr1[i].id, arr1[i]);
    }

    for(let i = 0; i < arr2.length; i++){
        if(map.has(arr2[i].id)){
            const ob = map.get(arr2[i].id);
            const ob2 = arr2[i];
            
            for(const key of Object.keys(ob2)){
                ob[key] = ob2[key];
            }

        }
        else {
            map.set(arr2[i].id, arr2[i]);
        }
    }

    return Array.from(map.values()).sort((a,b) => a.id - b.id);

};
const arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];
const arr2 = [
    {"id": 3, "x": 5}
];

console.log(join(arr1, arr2));



const arr3 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
];

const arr4 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
];

console.log(join(arr3, arr4));