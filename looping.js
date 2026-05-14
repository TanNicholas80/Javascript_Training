// 1. basic looping
for (let i = 1; i <= 15; i++) {
    console.log(i)
}

// 2. gunakan mod 3 dan 5
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FullStack")
    }
    else if (i % 3 === 0) {
        console.log("Full")
    } else if (i % 5 === 0) {
        console.log("Stack")
    } else {
        console.log(i)
    }
}

// 3. kita jadikan function
function fullstack(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FullStack")
        }
        else if (i % 3 === 0) {
            console.log("Full")
        } else if (i % 5 === 0) {
            console.log("Stack")
        } else {
            console.log(i)
        }
    }
}

fullstack(55);

function countFullstack(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            // count = count + 1;
            count++
        }
    }
    return count;
}

// get return 
const totalCount = countFullstack(55)
console.log(`Total Count : ${totalCount}`)