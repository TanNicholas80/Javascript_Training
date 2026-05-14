const words = "Hello Coding boOtcamp codeid";


/* console.log("word type : "+typeof words);
console.log("word length : "+words.length);

for (let i = 0; i < words.length; i++) {
    console.log('i:',i,"value:",words[i])    
} */

function countVocal(word) {
    let count = 0;
    //process
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'i' || word[i] === 'u' || word[i] === 'e' ||
            word[i] === 'o') {
            count++;
        }

    }
    return count;
}

console.log('Total Count Vocal : '+countVocal(words));

function countVocalConsonant(word) {
    let countVocal = 0;
    let countConsonant =0;
    
    //process
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'i' || word[i] === 'u' || word[i] === 'e' ||
            word[i] === 'o') {
            countVocal++;
        }else{
            countConsonant++;
        }

    }
    return [countVocal,countConsonant];
}

let [vocal, consonant] = countVocalConsonant(words);//RETURN ARRAY 2 KOTAK

console.log(`Vocal : ${vocal}`)
console.log(`Consonant : ${consonant}`)


function countVocalConsonant2(word) {
    let countVocal = 0;
    let countConsonant =0;
    
    let kata = word.toLowerCase();

    //process
    for (let i = 0; i < word.length; i++) {
        let char = kata[i];

        if (char === 'a' || char === 'i' || char === 'u' || char === 'e' ||
            char === 'o') {
            countVocal++;
        }else if (char >= 'a' && char <= 'z') { //ASCII a=97 s/d z =122
            countConsonant++;
        }

    }
    return [countVocal,countConsonant];
}

[vocal, consonant] = countVocalConsonant2(words);//RETURN ARRAY 2 KOTAK

console.log(`Vocal2 : ${vocal}`)
console.log(`Consonant2 : ${consonant}`)

console.log(words.charCodeAt(1))