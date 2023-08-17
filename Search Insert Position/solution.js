/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const currentIndex = nums.indexOf(target);
    let prevIndex = nums.indexOf(target - 1);
    let nextIndex = nums.indexOf(target + 1);

    if (currentIndex !== -1) return currentIndex;
    i = 2;
    while (prevIndex === -1 && nextIndex === -1) {
        prevIndex = nums.indexOf(target - i);
        nextIndex = nums.indexOf(target + i);
        i++;
    }
    if (prevIndex !== -1) return prevIndex + 1;
    else return nextIndex;
};
console.log(searchInsert([-1, 3, 5, 6], 0));