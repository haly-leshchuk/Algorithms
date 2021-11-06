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
            rl.on('line', line4 => {

                let stopsDistances = [];
                function readLine(line) {
                    for (let i = 0; i < stopsNumber; i++) {
                        stopsDistances.push(parseInt(line.toString().split(' ')[i], 10));
                    }
                    return stopsDistances;
                }

                const totalDistance = parseInt(line1);
                const fullTankDistance = parseInt(line2);
                const stopsNumber = parseInt(line3);
                stopsDistances = readLine(line4);
    
                console.log(minRefills(totalDistance, fullTankDistance, stopsNumber, stopsDistances));
                process.exit();
            })
        }) 
    })
});

function minRefills(totalDistance, fullTankDistance, stopsNumber, stopsDistances) {

    let distanceTraveled = 0;
    let totalStops = 0;

    while ((totalDistance - distanceTraveled) > fullTankDistance) {
        let possibleStops = [];

        for (let i = 0; i < stopsDistances.length; i++) {
            
            if (stopsDistances[i] <= (distanceTraveled + fullTankDistance)) {
                possibleStops.push(stopsDistances[i]);
            }
        }

        if (possibleStops.length !== 0) {
            totalStops++;
            distanceTraveled = Math.max(...possibleStops);

            for (let j = 0; j < possibleStops.length; j++) {
                stopsDistances.splice(stopsDistances.indexOf(possibleStops[j]), 1)
            }

        } else {
            totalStops = -1;
            totalDistance = distanceTraveled;
        }
    }

    return totalStops;

}

module.exports = minRefills;
