// Coursera Algorithms - Week 2
// Find greatest common divisor for the two integers using the Euclidean algorithm

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);

        console.log(gcd(a, b));
        process.exit();
    }
}

function gcd(a, b) {
    while (b != 0) {
        let bTemp = b;
        b = a%b;
        a = bTemp;
    }
    return a;
}

module.exports = gcd;
