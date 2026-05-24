// 1. Copy Array
const original = ["docker", "go"];
const copyOri = [...original];
let copyOri2 = [...original];
copyOri.push("js");

copyOri2 = ["java", "js", ...copyOri2]; // reassign array jadi error kalau const

console.log(copyOri);
console.log(copyOri2);
console.log(original);

// join array
const backend = ["docker", "go"];
const frontend = ["js", "flutter", "react"];
const fullstack = [...backend, ...frontend];
console.log(fullstack);