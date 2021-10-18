// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(naive(parseInt(line, 10)));
    process.exit();
}

function getFibSum(n) {
    
    // let a = 0;
    // let b = 1;
    // let c = 0;

    // if (n == 0)
    //     return 0;
    // else if (n == 1)
    //     return 1;
        
    // for (let i = 1; i < n + 2; i++) {
    //     c = (a + b).toString();
    //     c = Number(c[c.length - 1]);
    //     a = b;
    //     b = c;
    // }

    // return c - 1

}

function naive(n) {
    let a = 0;
    let b = 1;
    let c = 0;

    let sum = 1;
    let arr = [];

    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;


    for (let i = 2; i < n + 3; i++) {
        c = a + b;
        a = b;
        b = c;
        sum += c;
        arr.push([i, c, sum, 'SUM mod n: ', sum%i])
        //console.log('n = ', i, '; F(n) = ', c, 'SUM = ', sum)
    }

    return (console.log('Sum is: ', sum, 'Array is: ', arr)); 
}


module.exports = getFibSum;
