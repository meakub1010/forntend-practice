const maxProfit = (prices) => {
    // initial profit 0
    let totalProfit = 0;
    
    // as many as possible transactions
    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i-1]){
            totalProfit += prices[i]- prices[i-1];
        }
    }
    return totalProfit;
}


const maxProfitSingleTransaction = (prices) => {
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
}