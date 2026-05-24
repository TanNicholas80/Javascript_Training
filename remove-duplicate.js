// Modern Solution
const arrayA = [1, 1, 2, 3, 4, 1, 2, 3];
const arrayB = [7, 5, 3, 5, 1]
const arrayC = [1, 1, 1, 1]
const case1 = [...new Set(arrayA)]
const case2 = [...new Set(arrayB)]
const case3 = [...new Set(arrayC)]
console.log(case1) //output : [ 1, 2, 3, 4 ]
console.log(case2) //output : [ 7, 5, 3, 1 ]
console.log(case3) //output : [1]

// Old Solution
function removeDuplicates(arr) {
    let result = [];
    // Looping tiap elemen di dalam array
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        // check apakah element data ke-i udah masuk di variable result
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isDuplicate = true; // jika udah ada, maka set duplicate = true
                break; // keluar dari looping, lanjut ke angka berikutnya
            }
        }
        // Jika setelah dicek ternyata tidak ada duplikat, push ke variable result
        if (!isDuplicate) {
            result.push(arr[i]);
        }
    }
    return result;
}
const case1Old = removeDuplicates(arrayA);
const case2Old = removeDuplicates(arrayB);
const case3Old = removeDuplicates(arrayC);
console.log(case1Old); // Output: [ 1, 2, 3, 4 ]
console.log(case2Old); // Output: [ 7, 5, 3, 1 ]
console.log(case3Old); // Output: [ 1 ]