// Coursera. Algorithms I - Week 3

// You are going to travel to another city that is located 𝑑 miles away from your home city. 
// Your can can travel at most 𝑚 miles on a full tank and you start with a full tank. 
// Along your way, there are gas stations at distances stop 1 , stop 2 , . . . , stop 𝑛 from your home city. 
// What is the minimum number of refills needed?

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.on('line', line1 => {
    rl.on('line', line2 => {
        rl.on('line', line3 => {

            const adNumber = parseInt(line1);
            
            let profitPerClick = [];
            let clicksPerDay = [];
            
            function readLine(line, arr) {
                for (let i = 0; i < adNumber; i++) {
                    arr.push(parseInt(line.toString().split(' ')[i], 10));
                }
                return arr;
            }

            profitPerClick = readLine(line2, profitPerClick);
            clicksPerDay = readLine(line3, clicksPerDay);

            console.log(maxAdRevenue(adNumber, profitPerClick, clicksPerDay));
            process.exit();
        
        }) 
    })
});

function maxAdRevenue(adNumber, profitPerClick, clicksPerDay) {

    let totalValue = 0;
    profitPerClick = profitPerClick.sort(function(a, b){return b-a});
    clicksPerDay = clicksPerDay.sort(function(a, b){return b-a});

    for (let i = 0; i < profitPerClick.length; i++) {
        for (let j = 0; j < clicksPerDay.length; j++) {
            if (i === j) {
                totalValue += profitPerClick[i] * clicksPerDay[j];
            }
        }
    }

    return totalValue;
}

module.exports = maxAdRevenue;