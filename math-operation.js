// 1. Fibonnaci
function fibonnaci(n) {
    let first = 0;
    let second = 1;
    let next = first + second;
    console.log(first);

    for (let i = 0; i < n; i++) {
        console.log(next);
        next = first + second;
        first = second;
        second = next;
    }
}

// call function fibonnaci
// fibonnaci(20);

// 2. Prime Number
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    for (let i = 2; i < 5; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("5 isPrime : ", isPrime(5));

for(let i = 0; i < 100; i++) {
    if (isPrime(i)) {
        // console.log(i);
    }
} 

// 3. Reverse Number : Self Number, AddOnePlus, Palindrome
function reverseNumber(n) {
    let reversed = 0;
    while (n > 0) {
        let digit = n % 10;
        reversed = (reversed * 10) + digit;
        n = Math.floor(n / 10);
    }
    return reversed;
}

console.log(reverseNumber(214));