// 思路:对于每一天来说，它能得到的最大利益就是它和之前最低点的差.明天的比今天价格高，我就不卖，而如果低了，一定卖

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    var n = prices.length
    if (n <= 1) { return 0}

    var count = 0
    var i = 1
    var diff
    while (i != n) {
        diff = prices[i] - prices[i - 1]
        if (diff > 0) {
            count += diff
        }
        i++
    }
    return count
};
