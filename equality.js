// == vs ===
// 1. equality loose : compare dua nilai dengan tipe data yang berbeda
// jadi js akan mengubah salah satu atau keduanya jadi tipe data yang sama
console.log(5 == "5") // true (string "5" diubah menjadi number 5)
console.log(1 == true) // true
console.log(null == undefined) // true

// 2. strict equality 
// bandingkan balue dan tipe data
console.log(5 === "5") // false (string "5" diubah menjadi number 5)
console.log(1 === true) // false
console.log(null === undefined) // false