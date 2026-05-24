// 1. Find Min Max
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}

console.log(findMinMax([2,3,4,5,6,7,8,9,1,10]));

// 2. find minimum range
function findMinRange(arr, from, to) {
    let minValue = arr[from];
    let minIndex = from;

    for (let i = from; i <= to; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
            minIndex = i;
        }
    }

    return [minValue, minIndex];
}

console.log(findMinRange([5, 3, 4, 2, 6, 7, 8, 9, 1, 10],0,10));
console.log(findMinRange([5, 3, 4, 2, 6, 7, 8, 9, 1, 10],0,7));

// 3. reverse list
function reverseList(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverseList([1,2,3,4]));

// 4. Frequent Element
function frequentElement(arr) {
    let frequent = {};

    for (let i = 0; i < arr.length; i++) {
        if (frequent[arr[i]]) {
            frequent[arr[i]]++;
        } else {
            frequent[arr[i]] = 1;
        }
    }
    return frequent;
}

console.log(frequentElement([1,2,3,4,4,4,3,3,2,4]));
console.log(frequentElement([1,1,1,2,2,3,3,3]));

// 5. Addition
function addition(list1, list2) {
    const result = [];
    let carry = 0;
    let i = list1.length - 1;
    let j = list2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? list1[i] : 0;
        const digit2 = j >= 0 ? list2[j] : 0;
        const sum = digit1 + digit2 + carry;

        result.unshift(sum % 10);
        carry = Math.floor(sum / 10);

        i--;
        j--;
    }

    return result;
}

console.log('Addition :');
console.log(addition([1, 2, 3], [4, 5, 6])); // [5, 7, 9]
console.log(addition([9, 2, 7], [1, 3, 5])); // [1, 0, 6, 2]

// 6. MergeList
function mergeList(list1, list2) {
    return [...new Set([...list1, ...list2])].sort((a, b) => a - b);
}

console.log('MergeList :');
console.log(mergeList([1, 4, 7, 12, 20], [10, 15, 17, 33])); // [1, 4, 7, 10, 12, 15, 17, 20, 33]
console.log(mergeList([2, 3, 5, 7], [11, 13, 17])); // [2, 3, 5, 7, 11, 13, 17]