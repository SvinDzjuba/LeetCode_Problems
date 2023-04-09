/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const minRange = Math.pow(-2, 31);
    const maxRange = Math.pow(2, 31) - 1;
    let numbers = [];

    s = s.trim();
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i])) || s[i] == '-' || s[i] == '+') {
            numbers.push(s[i]);
        } else {
            break;
        }
    }
    s = parseInt(numbers.join(''));
    if (isNaN(s) || s == undefined) return 0;
    if (s < minRange) {
        return minRange;
    } else if (s > maxRange) {
        return maxRange;
    } else {
        return s;
    }
};
console.log(myAtoi("21474836460"));