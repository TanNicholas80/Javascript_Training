//misal n = 3452
// 1 -> return digit 1
function countDigit(n){
    if ( n ===0) return 1;
    let counter =0;
    let sisa = Math.abs(n); //use Math.abs,agar ga ada bilangan negatif

    while (sisa > 0) {
        //gunakan math.floor untuk dibulatkan 5/2=2
        sisa = Math.floor(sisa/10); // misal 5/2 = 2.5, 
        counter++;
    }

    return counter;
}

console.log(3452/10)

const totalDigit = countDigit(3452342234123413413232);
console.log(`total  :${totalDigit}`)