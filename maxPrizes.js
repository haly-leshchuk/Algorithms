// Coursera Algorithms: Week 3

// The goal of this problem is to represent a given positive integer 𝑛 
// as a sum of as many pairwise distinct positive integers as possible. 
// That is, to find the maximum 𝑘 such that 𝑛 can be written as 
// 𝑎 1 + 𝑎 2 + · · · + 𝑎 𝑘 where 𝑎 1 , . . . , 𝑎 𝑘 are positive integers and 𝑎 𝑖 = ̸ 𝑎 𝑗 for all 1 ≤ 𝑖 < 𝑗 ≤ 𝑘.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(maxPrize(parseInt(line, 10)));
    process.exit();
}

function maxPrize(n) {
    let prizeNumbers = [];
    let prizeNumbersString = '';
    let prizeNumber = 0;

    while (n !== 0) {
        prizeNumber++;

        if ((n - prizeNumber > prizeNumber) || (n === prizeNumber)) {
            n -= prizeNumber;
        } else {
            prizeNumber += n - prizeNumber;
            n = 0;
        }

        prizeNumbers.push(prizeNumber);
    }

    prizeNumbers.forEach(point => {
        prizeNumbersString += String(point) + ' ';
    })
    
    console.log(prizeNumbers.length);
    return prizeNumbersString;
}

module.exports = maxPrize;
