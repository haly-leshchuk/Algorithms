// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getFibMod(n, m));
        process.exit();
    }
}


function getFibMod(n, m) {
    let pisanoValue = pisano(m);
    n = n % pisanoValue;

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
        b = c%m;
    }

    return c%m
}

function pisano(m) {
    let prev = 0;
    let curr = 1;
    let res = 0;
 
    for(let i = 0; i < m * m; i++)
    {
        let temp = 0;
        temp = curr;
        curr = (prev + curr) % m;
        prev = temp;
 
        if (prev == 0 && curr == 1)
            res = i + 1;
    }
    return res;
}

module.exports = getFibMod;
