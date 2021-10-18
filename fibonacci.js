// Coursera Algorithms - Week 2
// Find n-th number in Fibonacci sequence

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    let a = 0;
    let b = 1;
    let c = 0;

    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;


    for (let i = 1; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}

module.exports = fib;
