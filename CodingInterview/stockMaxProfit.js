var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }
        else if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};

// Example usage:
const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices)); // Output: 5