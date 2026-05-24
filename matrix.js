// array 2 dimensi 
const row = 5;
const cols = 5;
let matrix = []; // empty array
for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = 0;
    }
}

console.table(matrix);

let counter = 1;
for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = counter++;
    }
}

console.table(matrix);

counter = 1;
for (let i = 0; i < row; i++) {
    matrix[i] = [];

    for (let j = 0; j < cols; j++) {
        if (i === j) {
            matrix[i][j] = counter++;
        } else if (i > j) {
            matrix[i][j] = 10;
        } else if (i < j) {
            matrix[i][j] = 20;
        }
    }
}

console.table(matrix);