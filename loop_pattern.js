const n =7;

for (let i = 0; i < n; i++) {
    console.log('*')
}


let baris = '';
for (let i = 0; i < n; i++) {
    baris = '* ';
    for (let j = 0; j < n; j++) {
        baris += '* ';
    }
    console.log(baris);
}

for (let i = 0; i < n; i++) {
    let row = "* ".repeat(n);
    console.log(row);
}