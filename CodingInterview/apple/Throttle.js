// debounce runs the function after a delay since the last call
// throttle runs the function at most once in a given time period


function throttle(fn, delay){
    let lastCall = 0;

    return function(...args){
        const context = this;
        const now = new Date().getTime();
        if(now - lastCall >= delay){
            fn.apply(context, args);
            lastCall = now;
        }
    }
}


// Example usage:
function onHello() {
  console.log("Hello!");
}
const throttledHello = throttle(onHello, 500);
setTimeout(() => {
    throttledHello();
    throttledHello();
    throttledHello();
}, 1000)
throttledHello();
throttledHello();
throttledHello();

// will price hello twice

// "Hello!" will be logged only once every 2 seconds, no matter how many times throttledHello is called

