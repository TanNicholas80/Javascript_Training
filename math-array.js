// 1. Fibonacci
function fibonacci(n) {
    let fibo = [0, 1]; // sediakan langsung 2 kotak

    for (let i = 2; i < n; i++) {
        let nextNumber = fibo[i - 1] + fibo[i - 2];
        fibo.push(nextNumber);
    }

    return fibo; // return array fibo
}

console.table([fibonacci(15)]);

// 2. Rotate Array
const myArr = [1, 2, 3, 4, 5];
console.table([myArr]);

function rotateArray(arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    //pindahkan value temp ke last index
    arr[arr.length - 1] = temp;
    return arr;
}

console.table([rotateArray(myArr)]);