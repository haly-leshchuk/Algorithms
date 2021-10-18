// Coursera Algorithms - Week 2
// Given two integers 𝑎 and 𝑏, find their least common multiple

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

        console.time('Naive algorithm time');
        console.log('Naive algorithm: ', naive(a, b));
        console.timeEnd('Naive algorithm time')
        
        console.time('Efficient algorithm time');
        console.log('Efficient algorithm: ', lcm(a, b));
        console.timeEnd('Efficient algorithm time')
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

function lcm(int1, int2) {
    // Find the greatest common divisor for the two given integers
    let greatestCommonDivisor = gcd(int1, int2);

    int1 = int1/greatestCommonDivisor;
    int2 = int2/greatestCommonDivisor;

    return int1 * int2 * greatestCommonDivisor;
}

// Create a naive algorithm for testing purposes
function naive(int1, int2) {
    let largerInt = 1;
    let smallerInt = 1;

    if (int1 > int2) {
        largerInt = int1;
        smallerInt = int2;
    } else {
        largerInt = int2;
        smallerInt = int1;
    }
    
    let res = 1;
    
    for (let i = largerInt; i < int1*int2 + 1; i++) {
        if ((i%largerInt == 0) && (i%smallerInt == 0)) {
            res = i;
            break;
        }
    }

    return res;
}

module.exports = gcd;