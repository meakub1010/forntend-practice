// console.log(a); // undefined
// var a = 10;

// var declaration is hoisted but not their initializations

// this binding


// const obj = {
//     value: 42,
//     getValue: function() {
//         return this.value;
//     }
// };
// const getVal = obj.getValue;
// console.log(typeof getVal);
// console.log(getVal()); // undefined,

// context of this is lost when getValue is assigned directly
// use bind to asign the this context then is should print the value correctly


// const getValue = obj.getValue.bind(obj);
// console.log(getValue()); // 42


// Event Loop / Async

// console.log("Start");
// setTimeout(() => console.log("timeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

// o/p:
/*
Start
End
Promise
timeout
*/

// Execution order in event loop
// 1. synchronous code
// 2. Microtasks queue(drained completely)
// 3. Macrotasks queue(1 task get executed and then loop continue)
// after executing one macrotask, event loop then again handle synchronous code if any, then new microtasks and then anbother macrotask

// console.log("EVENT LOOP EXECUTION ORDER");

// setTimeout(() => {
//     console.log("macro task 1");
//     Promise.resolve().then(() => console.log("macro task -> micro stask"))
// }, 0);
// setTimeout(() => console.log("macro task 2"), 0);

// Promise.resolve().then(() => console.log("micro task 1"));
// Promise.resolve().then(() => console.log("micro task 2"));

// console.log("sync");

/*
o/p:
EVENT LOOP EXECUTION ORDER
sync
micro task 1
micro task 2
macro task 1
// at this point event loop restart
macro task -> micro stask
macro task 2

*/


// Microtask starvation - If you keep scheduling microtasks recursively, macrotasks may never get executed (browser may freeze).
setTimeout(()=> console.log("starving"), 0);
function loop(){
    Promise.resolve().then(() => loop()); // loop() will cause infinite loop and keep adding micro tasks and macro task will never get chance to execute and print "starving"
    console.log("calling loop");
}

loop();


