/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	// if (nums.length == 0) {return 0}
	var number = 0
    for (var i = 0; i < nums.length; i++) {
  		if (nums[i] != nums[number]) {
  			number++
  			nums[number] = nums[i]
  		}
    }
    return number + 1
};
