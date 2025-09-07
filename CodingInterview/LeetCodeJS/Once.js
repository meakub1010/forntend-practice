const once = function(fn){
    let hasBeenCalled = false;

    return function(...args){
        if(hasBeenCalled){
            return undefined;
        }
        else {
            hasBeenCalled = true;
            return fn(...args);
        }
    }
}

 let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
 
 console.log(onceFn(1,2,3)); // 6
 console.log(onceFn(2,3,6)); // returns undefined without calling fn