// Coursera. Algorithms I - Week 3
// The goal of this code problem is to implement an algorithm for the fractional knapsack problem

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
    let totalValue = 0;

    while (capacity !== 0) {
        const fractionValues = [];
        for (i = 0; i < count; i++) {
            fractionValues.push(values[i] / weights[i])
        }

        let maxIndex = fractionValues.indexOf(Math.max(...fractionValues));

        if (capacity >= weights[maxIndex]) {
            totalValue += weights[maxIndex] * fractionValues[maxIndex];
            capacity -= weights[maxIndex];
            values.splice(maxIndex, 1);
            weights.splice(maxIndex, 1);
            count--;
        } else {
            totalValue += capacity * fractionValues[maxIndex];
            capacity = 0; 
        }
    }

return totalValue;
}

module.exports = max;
