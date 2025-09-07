Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)){
            return reject(new TypeError('Argument must be an array'));
        }

        const results = [];
        let completed = 0;

        promises.forEach((p, index) => {
            Promise.resolve(p)
            .then(value => {
                results[index] = value;
                completed++;

                if(completed === promises.length){
                    resolve(results);
                }
            })
            .catch(err => {
                reject(err);
            })
        })

    })
};

// Example usage:
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(42);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
Promise.myAll([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 42, "foo"]
}).catch(err => {
    console.error(err);
});