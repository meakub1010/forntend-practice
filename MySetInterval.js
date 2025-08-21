 let intervalId = {timeoutId: null, active: true};

 let prev = Date.now();

function mySetInterval(func, delay, period){
    let count = 0;
    let execTime = Date.now() + delay;
    
    const run = () => {
        if(!intervalId.active){
            return;
        }
        func();
        count++;        
        let nextCall = execTime + period * count;
        let diff = nextCall - Date.now();
        execTime = nextCall;
        intervalId.timeoutId = setTimeout(run, diff);
    }
    intervalId.timeoutId = setTimeout(run, delay);
    return intervalId;
}

function myClearInterval(intervalId){
    if(intervalId && intervalId.timeoutId){
        clearTimeout(intervalId);
        count = 0;
        intervalId.active = false;
        console.log('clear interval');
    }
    
}


const func = () => {
  const now = Date.now()
  console.log('roughly ', now - prev)
  prev = now
}
const id = mySetInterval(func, 100, 200)

setTimeout(() => myClearInterval(id), 10000);

