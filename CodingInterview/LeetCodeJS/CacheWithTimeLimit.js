const TimeLimitedCache = function(){
    this.cache = new Map();
}

TimeLimitedCache.prototype.set = function(key, value, duration){
    const valueInCahce = this.cache.get(key);

    if(valueInCache){
        clearTimeout(valueInCache.timeout);
    }

    const timeout = setTimeout(() => {
        this.cache.delete(key)
    }, duration);
    this.cache.set(key, {value, timeout});

    return Boolean(valueInCache);
}

TimeLimitedCache.prototype.get = function(key){
    return this.cache.get(key) ? this.cache.get(key).value : -1;
}

TimeLimitedCache.prototype.count = function(){
    return this.cache.size;
}


// Input: 
// actions = ["TimeLimitedCache", "set", "get", "count", "get"]
// values = [[], [1, 42, 100], [1], [], [1]]
// timeDelays = [0, 0, 50, 50, 150]
// Output: [null, false, 42, 1, -1]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
// At t=50, key=1 is requested and the value of 42 is returned.
// At t=50, count() is called and there is one active key in the cache.
// At t=100, key=1 expires.
// At t=150, get(1) is called but -1 is returned because the cache is empty.