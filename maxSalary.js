// Coursera. Algorithms I - Week 3

// As the last question of a successful interview, your boss gives you a few pieces of paper with numbers 
// on it and asks you to compose a largest number from these numbers. 
// The resulting number is going to be your salary, so you are very much interested in maximizing this number.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.on('line', line1 => {
    rl.on('line', line2 => {

        let digitsArray = [];
        
        function readLine(line) {
            for (let i = 0; i < digitsNumber; i++) {
                digitsArray.push(parseInt(line.toString().split(' ')[i], 10));
            }
            return digitsArray;
        }

        const digitsNumber = parseInt(line1);
        digitsArray = readLine(line2);

        console.log(maxSalary(digitsNumber, digitsArray));
        process.exit();
 
    })
});

function maxSalary(digitsNumber, digitsArray) {

    const findLargerDigit = (digit1, digit2) => {
        const largerDigit1 = Number(digit1.toString() + digit2.toString());
        const largerDigit2 = Number(digit2.toString() + digit1.toString());

        if (largerDigit1 >= largerDigit2) {
            return digit1;
        } else {
            return digit2;
        }
    }

    let finalNumber = '';

    while (digitsArray.length !== 0) {
        let maxDigit = 0;
        digitsArray.forEach(digit => {
            maxDigit = findLargerDigit(digit, maxDigit);
        })
        finalNumber += maxDigit.toString();
        digitsArray.splice(digitsArray.indexOf(maxDigit), 1)
    }

    return finalNumber;
}

module.exports = maxSalary;
