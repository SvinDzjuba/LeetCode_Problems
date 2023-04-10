/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let openingBrackets = [];
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let string of s) {
        if (string in brackets) {
            openingBrackets.push(string);
        }
        else if (brackets[openingBrackets.pop()] !== string) {
            return false;
        }
    }
    return openingBrackets.length == 0;
};
console.log(isValid("[]()"));