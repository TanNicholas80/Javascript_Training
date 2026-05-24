// Set Operation himpunan
const arrayA = [1, 2, 3, 4, 5]
const arrayB = [2, 4, 6, 7]
const setA = new Set(arrayA);
const setB = new Set(arrayB);
// 1. A - B (Elemen di A tapi tidak ada di B)
const differenceAMinusB = arrayA.filter(item => !setB.has(item)); // ! = negation
console.log(differenceAMinusB)
// 2. B - A (Elemen di B tapi tidak ada di A)
const differenceBMinusA = arrayB.filter(item => !setA.has(item));
console.log(differenceBMinusA)
// 3. A ∪ B (Gabungan semua elemen unik dari A dan B)
const union = [...new Set([...arrayA, ...arrayB])];
console.log(union)
// 4. A ∩ B (Irisan elemen ada di A DAN juga ada di B)
const intersection = arrayA.filter(item => setB.has(item));
console.log(intersection)