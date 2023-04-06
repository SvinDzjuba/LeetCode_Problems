/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let str = '';
    let current = numRows + (numRows - 2);
    let lineNumber = 0;
    for (let i = 0; i < s.length; i++) {
        if(str.length == 0) { str = s[0] }

        if(s[current] != undefined) {
            str += s[current];
            // console.log('cur: ' + current);
            // console.log('line: ' + lineNumber);
            current += (numRows + (numRows - 2));
        } else {
            lineNumber++;
            current = ((str.length - 1) - lineNumber);
            // console.log('str: ' + (str.length - 1));
            // console.log('hey: ' + lineNumber);
        }
    }
    return str;
};
console.log(convert("PAYPALISHIRING", 4));