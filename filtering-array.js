// 1. greater than, lambda
const scores = [50,55,65,70, 85, 90, 95, 100];
const topScores = scores.filter(item => item > 80);

console.log(topScores);

// 1.1 Old School
let topScores2 = [];
for (let item = 0; item < scores.length; item++) {
    if (scores[item] > 80) {
        topScores2 = [...topScores2, scores[item]];
    }
}

console.table([topScores2]);

// 2. filtering object
const fleet = [
    {id: "hino-01", status: "active", fuel: 80},
    {id: "hino-02", status: "maintenance", fuel: 50},
    {id: "hino-03", status: "active", fuel: 70},
]

const activeFleet = fleet.filter(item => item.status === "active");
console.table(activeFleet);