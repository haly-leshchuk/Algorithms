// Coursera. Algorithms I - Week 3

// You are given a set of segments on a line and your goal is to mark as few points on a line as possible 
// so that each segment contains at least one marked point.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const segmentsCount = parseInt(line);
    const segments = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        segments.push([v, w]);

        if (++count >= segmentsCount) {
            console.log(collectSignatures(segmentsCount, segments));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function collectSignatures(segmentsCount, segments) {

    let intersectionPointsString = '';
    let intersectionPoints = [];
    let spreadedSegments = [];


    segments.forEach(chunk => {
        let chunkNumbers = [];

        for (let el = chunk[0]; el <= chunk[1]; el++) {
            chunkNumbers.push(el);
        }

        spreadedSegments.push(chunkNumbers)
    });


    while (spreadedSegments.length !== 0) {

        let numberWithHighestOccurence = 0;
        let allNumbers = [];

        spreadedSegments.forEach(segment => {
            segment.forEach(num => {
                allNumbers.push(num);
            })
        })


        numberWithHighestOccurence = allNumbers.reduce((previous, current, i, arr) =>
            arr.filter(item => item === previous).length >
            arr.filter(item => item === current).length
                ? previous
                : current
            );

        
        for (let i = spreadedSegments.length - 1; i > -1; i--) {
            if (spreadedSegments[i].some(el => el === numberWithHighestOccurence)) {
                spreadedSegments.splice(i, 1);
            }
        }

        intersectionPoints.push(numberWithHighestOccurence);

    }

    intersectionPoints.forEach(point => {
        intersectionPointsString += String(point) + ' ';
    })
    
    return intersectionPointsString;
}

module.exports = collectSignatures;