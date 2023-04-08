/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let revertedNum = x;
    revertedNum = revertedNum.toString().replace('-', '');
    revertedNum = revertedNum.split('').reverse().join('');
    x < 0 ? revertedNum = '-' + revertedNum : '';
    x = parseInt(revertedNum);

    if(x > Math.pow(-2, 31) && x < (Math.pow(2, 31) - 1)) {
        return x;
    } else {
        return 0;
    }

};
console.log(reverse(1534236469));