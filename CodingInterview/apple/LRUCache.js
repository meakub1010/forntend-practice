class LRUCache {
    constructor(capacity){
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key){
        if(!this.cache.has(key)){
            return -1;
        }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    put(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if(this.cache.size > this.capacity){
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey);
        }
    }
    
}

// Example usage:
const lru = new LRUCache(2);
lru.put(1, 1); // cache is {1=1}
lru.put(2, 2); // cache is {1=1, 2=2}
console.log(lru.get(1));    // return 1
lru.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lru.get(2));    // returns -1 (not found)
lru.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lru.get(1));    // returns -1 (not found)
console.log(lru.get(3));    // returns 3
console.log(lru.get(4));    // returns 4