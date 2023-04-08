var fourDigitNumbers = function (number) {
    let suitableNumbers = [];
    let combinedNumbers = function () {
        let combinedNumbers = [];
        for (let i = 0; i <= 9; i++) {
            for (let j = 0; j <= 9; j++) {
                if(i != j) {
                    combinedNumbers.push([i, j]);
                }
            }
        }
        return combinedNumbers;
    }
    let calculate = function (combinedNumbers) {
        for (let i = 0; i < combinedNumbers.length; i++) {
            for (let j = 0; j < combinedNumbers.length; j++) {
                if(!combinedNumbers[i].includes(combinedNumbers[j][0])
                    && !combinedNumbers[i].includes(combinedNumbers[j][1])) 
                {
                    let result = 
                        (combinedNumbers[i][0] - combinedNumbers[i][1]) 
                            + (combinedNumbers[j][0] - combinedNumbers[j][1]);
                    if(result == number) {
                        let finalNumber = parseInt(`
                            ${combinedNumbers[i][0]}${combinedNumbers[i][1]}${combinedNumbers[j][0]}${combinedNumbers[j][1]}`
                        );
                        if(finalNumber >= 1000 && finalNumber <= 9999) {
                            suitableNumbers.push(parseInt(finalNumber));
                        }
                    }
                }
            }
        }
    }
    calculate(combinedNumbers());
    return [suitableNumbers, `Total: ${suitableNumbers.length}`];
}
console.log(fourDigitNumbers(14));