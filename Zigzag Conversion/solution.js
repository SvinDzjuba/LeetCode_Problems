/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let zigZagString = '';
    let charsArr = [];
    let charPosHandler = 0;
    let orientation = 1;

    for (let i = 0; i < s.length; i++) {
        if (numRows > 1) {
            orientation % 2 === 0 ? charPosHandler-- : charPosHandler++;
            if (i == ((numRows - 1) * orientation)) {
                orientation++;
            }
        }
        charsArr.push(
            {
                line: charPosHandler,
                char: s[i]
            }
        );
    }
    for (let j = 0; j <= numRows; j++) {
        for (let i = 0; i < charsArr.length; i++) {
            if (charsArr[i].line == j) {
                zigZagString += charsArr[i].char;
            }
        }
    }
    return zigZagString;
};
console.log(convert("AB", 1));