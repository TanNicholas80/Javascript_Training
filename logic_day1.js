const n = 5;

// 1. Box Hollow
console.log('Box Hollow :');
for (let i = 0; i < n; i++) {
    let baris = '';
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
            baris += '*';
        } else {
            baris += ' ';
        }
        if (j < n - 1) {
            baris += ' ';
        }
    }
    console.log(baris);
}

// 2. Triangle Left
console.log('Triangle Left :');
for (let i = 0; i < n; i++) {
    let baris = '';
    for (let j = 0; j < n; j++) {
        if (j <= i) {
            baris += '*';
        } else {
            baris += ' ';
        }
        if (j < n - 1) {
            baris += ' ';
        }
    }
    console.log(baris);
}

// 3. Triangle Upward
console.log('Triangle Upward :');
for (let i = 0; i < n; i++) {
    baris = '';
    for (let j = n; j >= 0; j--) {
        if (j<=i) {
            baris += ' ';
        } else {
            baris += '*';
        }
        if (j < n + 1) {
            baris += ' ';
        }
    }
    console.log(baris);
}

// 4. Triangle Right
console.log('Triangle Right :');
for (let i = 0; i < n; i++) {
    baris = '';
    for (let j = n; j >= 0; j--) {
        if (j<=i) {
            baris += '*';
        } else {
            baris += ' ';
        }
        if (j < n) {
            baris += ' ';
        }
    }
    console.log(baris);
}

// 5. Triangle 05
console.log('Triangle 05 :');
for (let i = 0; i < n; i++) {
    baris = '';
    for (let j = 0; j < n; j++) {
        if (i === j) {
            baris += j + 1;
        } else {
            baris += '*';
        }
        if (j < n - 1) {
            baris += ' ';
        }
    }
    console.log(baris);
}

// 6. Triangle 06
console.log('Triangle 06 :');
for (let i = 0; i < n; i++) {
    let baris = '';
    for (let j = 0; j < n; j++) {
        if (i === n - 1) {
            baris += n + j;
        } else if (j === 0) {
            baris += i + 1;
        } else {
            baris += '*';
        }
        if (j < n - 1) {
            baris += ' ';
        }
    }
    console.log(baris);
}

// 7. Triangle 04
console.log('Triangle 04 :');
for (let i = 0; i < n; i++) {
    let baris = '';
    for (let j = 0; j < n; j++) {
        if (j >= i) {
            baris += '*';
        } else {
            baris += ' ';
        }
        if (j < n - 1) {
            baris += ' ';
        }
    }
    console.log(baris);
}