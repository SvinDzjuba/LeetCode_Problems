/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let num = 0;
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                num = nums[i] + nums[j];
                if (num == target) {
                    return number = [i, j];
                }
            }
        }
    }
};