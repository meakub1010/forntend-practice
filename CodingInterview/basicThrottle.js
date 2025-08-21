// take an input function and delay
// returned a throttled function
// regardless how many time the throttled function called it will call at most once within the given delay or cooling period


function throttle(func, delay){
    let lastCall = 0;

    return function (...args){
        const now = Date.now();
        if(now - lastCall >= delay){
            lastCall = now;
            func.apply(this, args);
        }
    }

}

const myFunc = () => console.log("calling throttled");

// const throttledFunction = throttle(myFunc, 8000);

// setTimeout(throttledFunction, 1000);// will run
// setTimeout(throttledFunction, 2000); // skipped
// setTimeout(throttledFunction, 3000); // skipped
// setTimeout(throttledFunction, 10000); // this one will run


// implement with leading and trailing options
const myFunc2 = () => console.log("calling throttled 2");

function throttle2(func, delay, options){
    let lastCallTime, timer, leadingCalled;

    const {leading = true, trailing = true} = options || {};

    return function throttledFunc(...args){
        const now = new Date().getTime();


        if(!lastCallTime && leading){
            leadingCalled = true;
            func.apply(this, args);
            lastCallTime = now;
        }
        else {
            clearTimeout(timer);
            timer = setTimeout(() => {
                if(trailing || (now - lastCallTime >= delay)){
                    func.apply(this, args);
                    lastCallTime = now;
                }
            }, delay - (now-lastCallTime))
        }
        if(leading && leadingCalled) leadingCalled = false;
    }
}

const throttledFunc2 = throttle2(myFunc2, 5000, {leading: true, trailing: true});

throttledFunc2(); // this run
setTimeout(throttledFunc2, 1000);
setTimeout(throttledFunc2, 1000);
setTimeout(throttledFunc2, 1000);
setTimeout(throttledFunc2, 1000);
setTimeout(throttledFunc2, 5000);
setTimeout(throttledFunc2, 8000);