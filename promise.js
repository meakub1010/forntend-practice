const promise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Alice" };
            // Simulating a successful operation
            resolve(data);
        }, 1000);
    }
);

promise.then(
    (data) => {
        console.log("Data received:", data);
    }
).catch(
    (error) => {
        console.error("Error occurred:", error);
    }
);


// resolve bunch of promises in order

const tasks = [
    () => new Promise((resolve) => setTimeout(() => resolve("Task 1 completed"), 1000)),
    () => new Promise((resolve) => setTimeout(() => resolve("Task 2 completed"), 2000)),
    () => new Promise((resolve) => setTimeout(() => resolve("Task 3 completed"), 1500)) 
];


async function runInOrder(tasks) {
    for (const task of tasks) {
        const result = await task(); // wait for each task to complete
        console.log(result);
    }
}

// runInOrder(tasks).then(() => {
//     console.log("All tasks completed");
// }).catch((error) => {
//     console.error("Error in tasks:", error);
// });

// Alternatively, you can use reduce to run tasks in order

 console.log("Using reduce to run tasks in order");

// tasks.reduce((prev, curr) => {
//     return prev.then(() => curr().then(console.log));
// }, Promise.resolve());


// In parallel, you can use Promise.all to run all tasks at once. It does not wait for one to finish
// order is preserved in reasults as per input arr
// Fails first, if any promise rejects, promise all returns immediately with that error

Promise.all(tasks.map(task => task()))
    .then(results => {
        console.log("All tasks completed in parallel:");
        results.forEach(result => console.log(result));
    })
    .catch(error => {
        console.error("Error in parallel tasks:", error);
    });


