const HitCounter = function() {
    this.hits = [];
};

HitCounter.prototype.hit = function(timestamp){
    // 
    this.hits.push(timestamp);
}

HitCounter.prototype.getHits = function(timestamp){
    console.log(this.hits);

    while(this.hits.length > 0){
        if(this.hits[0] <= timestamp - 300){
            this.hits.shift();
        }
        else {
            break;
        }
    }
    return this.hits.length;
} // Time: O(n), Space: O(n)

// Example usage:
const hitCounter = new HitCounter();
hitCounter.hit(1);
hitCounter.hit(2);
hitCounter.hit(3);
console.log(hitCounter.getHits(4)); // Output: 3
hitCounter.hit(300);
console.log(hitCounter.getHits(300)); // Output: 4
console.log(hitCounter.getHits(301)); // Output: 3  