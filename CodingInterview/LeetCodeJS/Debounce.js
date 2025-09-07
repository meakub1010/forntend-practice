const debounce = function(fn, t){
    let timer;

    return function(...args){
        if(timer){
            clearTimeout(timer);
        }

        const now = Date.now();

        timer = setTimeout(() => {
            fn(...args);
        }, t);
    }
}

 const log = debounce(console.log, 100);
 log('Hello'); // cancelled
 log('Hello'); // cancelled
 log('Hello'); // Logged at t=100ms