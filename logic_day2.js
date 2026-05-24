// MATH & STRING

// 1. Palindrome
function isPalindrome(n) {
    let reversed = 0;
    let original = n;
    while (n > 0) {
        let digit = n % 10;
        reversed = (reversed * 10) + digit;
        n = Math.floor(n / 10);
    }
    return reversed === original;
}

console.log('Is Palindrome :');
console.log(isPalindrome(2147447412)); // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(110)); // false

// 2. Capitalize First Letter
function capitalize(word) {
    let result = '';
    let kata = word.split(' ');
    for (let i = 0; i < kata.length; i++) {
        result += kata[i].charAt(0).toUpperCase() + kata[i].slice(1) + ' ';
    }
    return result.trim();
}

console.log('Is Capitalize First Letter :');
console.log(capitalize("this is a very special title"));
console.log(capitalize("effective java is great"));

// 3. No duplicate character
function isNoDuplicateCharacter(word) {
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log('Is No Duplicate Character :');
console.log(isNoDuplicateCharacter("codeid")); // false
console.log(isNoDuplicateCharacter("abcdef")); // true

// 4. Is Bracket Balanced
function isBrace(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log('Is Bracket Balanced :');
console.log(isBrace("(())")); // true
console.log(isBrace("()()")); // true
console.log(isBrace("((()")); // false

// Arrays

// 1. Order Even Before Odd
function orderEvenBeforOdd(n) {
    let even = [];
    let odd = [];
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0) {
            even.push(n[i]);
        } else {
            odd.push(n[i]);
        }
    }
    return [...even, ...odd];
}

console.log('Order Even Before Odd :');
console.log(orderEvenBeforOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(orderEvenBeforOdd([3, 4, 5, 2, 10]));
console.log(orderEvenBeforOdd([2, 4, 6, 10, 1]));

// 2. String Palindrome
function isPalindromeString(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log('Is Palindrome String :');
console.log(isPalindromeString(["donout", "king", "donout"])); // true
console.log(isPalindromeString(["min", "max", "min"])); // true
console.log(isPalindromeString(["true", "false", "false"])); // false

// 3. Add One Plus
function addOnePlus(n) {
    let carry = 1;
    for (let i = n.length - 1; i >= 0; i--) {
        let sum = n[i] + carry;
        n[i] = sum % 10;
        carry = Math.floor(sum / 10);
    }
    if (carry > 0) {
        n.unshift(carry);
    }
    return n;
}

console.log('Add One Plus :');
console.log(addOnePlus([1, 3, 2, 4])); // [1, 3, 2, 5]
console.log(addOnePlus([1, 4, 8, 9])); // [1, 4, 9, 0]
console.log(addOnePlus([9, 9, 9, 9])); // [1, 0, 0, 0, 0]

// MATRIX

// 1. Pattern 01
const row = 5;
const cols = 5;
let matrix = []; // empty array

let counter = 1;
for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = counter++;
    }
}

console.table(matrix);

// 2. pattern 02
for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        if(i >= j) {
            matrix[i][j] = i + j + 1;
        } 
    }
}

console.table(matrix);

// 3. pattern 03
for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        if(i <= cols - 1 - j) {
            matrix[i][j] = i + j + 1;
        }
    }
}

console.table(matrix);

// 4. pattern 04
for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        if(i <= j) {
            matrix[i][j] = j + 1;
        }
    }
}

console.table(matrix);

// 5. pattern 05
counter = 1;
for (let i = 0; i < row; i++) {
    matrix[i] = [];

    for (let j = 0; j < cols; j++) {
        if (i === j) {
            matrix[i][j] = counter++;
        } else if (i > j) {
            matrix[i][j] = 20;
        } else if (i < j) {
            matrix[i][j] = 10;
        }
    }
}

console.table(matrix);

// 6. pattern 06
counter = 5;
for (let i = 0; i < row; i++) {
    matrix[i] = [];

    for (let j = 0; j < cols; j++) {
        if (i === j) {
            matrix[i][j] = counter--;
        } else if (i > j) {
            matrix[i][j] = 10;
        } else if (i < j) {
            matrix[i][j] = 20;
        }
    }
}

console.table(matrix);

// 7. pattern 07
function pattern07(row) {
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = [];
        let startVal = row - i;
        for (let j = 0; j < 2 * startVal - 1; j++) {
            if (j < startVal) {
                matrix[i][j] = startVal - j;
            } else {
                matrix[i][j] = j - startVal + 2;
            }
        }
    }

    return matrix;
}

console.table(pattern07(8));

// 8. pattern 08
function pattern08(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            if (i % 2 === 0) {
                matrix[i][j] = n - j;
            } else {
                matrix[i][j] = j + 1;
            }
        }
    }
    return matrix;
}

console.table(pattern08(5));
console.table(pattern08(9));

// 9. pattern 09
function pattern09(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    matrix[i][j] = '-';
                } else {
                    matrix[i][j] = j + 1;
                }
            } else {
                if (j % 2 === 0) {
                    matrix[i][j] = j + 1;
                } else {
                    matrix[i][j] = '-';
                }
            }
        }
    }   
    return matrix;
}

console.table(pattern09(5));
console.table(pattern09(9));