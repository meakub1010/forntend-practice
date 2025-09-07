// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.


var maxProfit = function(prices) {
    let totalProfit = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i-1]){
            totalProfit += prices[i] - prices[i-1];
        }
    }

    return totalProfit;1
}

// Example usage:
const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices)); // Output: 7