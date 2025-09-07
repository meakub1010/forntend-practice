const throttle = function(fn, delay){
    let lastCall = 0;
    let timeoutId = null;
    let savedArgs, savedThis;

    return function(...args){
        const now = Date.now();
        const remaining = delay - (now - lastCall);
        savedArgs = args;
        savedThis = this;

        if(remaining <= 0){
            fn.apply(savedThis, savedArgs);
            lastCall = now;
        }
        else if(!timeoutId){
            timeoutId = setTimeout(() => {
                fn.apply(savedThis, savedArgs);
                lastCall = Date.now();
                timeoutId = null;
            }, remaining);
        }
    }
}

// Time: O(1) | Space: O(1)

let count = 0;
const throttledFn = throttle(() => {
    count++;
    console.log('Throttled function called', count);
}, 1000);

// Simulate rapid calls
let intvl = setInterval(throttledFn, 300); // Should log only once every 2 seconds

// To stop the interval after some time
setTimeout(() => clearInterval(intvl), 10000); // Stop after 10 seconds