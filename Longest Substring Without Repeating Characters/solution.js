/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let substring = [];
    let longestLength = 0;

    for (let i = 0; i < s.length; i++) {
        let charPosition = substring.indexOf(s[i]);
        if (charPosition != -1) {
            substring.splice(0, charPosition + 1);
        }
        substring.push(s[i]);

        longestLength = Math.max(
            longestLength,
            substring.length
        );
    }
    return longestLength;
};