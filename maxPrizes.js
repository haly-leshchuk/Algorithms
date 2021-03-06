// Coursera Algorithms: Week 3

// The goal of this problem is to represent a given positive integer π 
// as a sum of as many pairwise distinct positive integers as possible. 
// That is, to find the maximum π such that π can be written as 
// π 1 + π 2 + Β· Β· Β· + π π where π 1 , . . . , π π are positive integers and π π = ΜΈ π π for all 1 β€ π < π β€ π.

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
