function shuffle(arr){
    for(let i = 0; i < arr.length; i++){
        const j = i + Math.floor(Math.random() * (arr.length-i));

        ;[arr[i], arr[j]] = [arr[j], arr[i]];
        console.log(arr);
    }
}

const arr = [1, 2, 3, 4, 5];
shuffle(arr);
//console.log(arr); // e.g., [3, 5, 1, 4, 2]
