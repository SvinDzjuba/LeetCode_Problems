/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let longest = '';
    var getLongestPalindrome = function (leftPos, rightPos) {
        while (
            leftPos >= 0
            && rightPos < s.length
            && s[leftPos] === s[rightPos]
        ) {
            leftPos--;
            rightPos++;
        }

        if (rightPos - leftPos > longest.length) {
            longest = s.slice(leftPos + 1, rightPos);
        }
    }
    for (let i = 0; i < s.length; i++) {
        // even palindromes
        getLongestPalindrome(i, i + 1);

        // odd palindromes
        getLongestPalindrome(i, i);
    }
    return longest;
};