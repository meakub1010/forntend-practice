async function sleep(millis){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis);
    })
}

// Usage
let t = Date.now()
sleep(8000).then(() => console.log(Date.now() - t)) // 100