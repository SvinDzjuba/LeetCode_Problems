/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    nums1.push(...nums2);
    nums1 = nums1.sort(function (a, b) { return a - b });

    if (nums1.length % 2 == 0) {
        let arrCenter = nums1.length / 2;
        return ((nums1[arrCenter] + nums1[arrCenter - 1]) / 2).toFixed(5);
    } else {
        let arrCenter = Math.trunc(nums1.length / 2);
        return (nums1[arrCenter]).toFixed(5);
    }
};