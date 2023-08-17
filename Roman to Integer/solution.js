/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let integer = 0;
    const romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    for (let i = 0; i < s.length; i++) {
        for (key in romanNumbers) {
            if (key === s[i]) {
                if (romanNumbers[s[i - 1]] < romanNumbers[key]) {
                    integer += (romanNumbers[key] - (romanNumbers[s[i - 1]]) * 2);
                } else {
                    integer += romanNumbers[key];
                }
            }
        }
    }
    return integer;
};
console.log(romanToInt("MCMXCIV"));