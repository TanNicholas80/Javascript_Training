// 1. Initial Array Old School
let nums = [];
nums[0] = 1;
nums[1] = 2;
nums[2] = 10;
nums[3] = 4;

console.log(nums);

console.table([nums]);

nums.unshift(55);

console.table([nums]);

// 2. Using Constructor
let brands = new Array("Honda", "Suzuki", "Toyota");
console.table([brands]);

// 3. Literal
let emps = ["John", "sarsa", "arya"];
console.table([emps]);

// 1. unshift : insert first index
let movies = ["got","hobbit","lotr"]
movies.unshift("rambo")

console.log(movies) // output : ["rambo","got","hobbit","lotr"]

// 1.1 insert multiple element array di index pertama
movies = ["got","hobbit","lotr"]
movies.unshift("rambo","mi2","lord of the rings")

console.log(movies) // output : ["rambo","mi2","lord of the rings","got","hobbit","lotr"]

// 1.2 shift : remove first index
movies = ["got","hobbit","lotr"]
movies.shift()

console.log(movies) // output : ["hobbit","lotr"]

// 2. push : insert element array di last index
movies = ["got","hobbit","lotr"]
movies.push("harry potter")

console.log(movies) // output : ["got","hobbit","lotr","harry potter"]

// 2.1 push : insert multiple element array di last index
movies = ["got","hobbit","lotr"]
movies.push("harry potter","MI2")

console.log(movies) // output : ["got","hobbit","lotr","harry potter","MI2"]

// 3. pop : remove last index
movies = ["got","hobbit","lotr","harry potter"]
movies.pop()

console.log(movies) // output : ["got","hobbit","lotr"]

let myMovies = [];

myMovies.push("GOT");
myMovies.push("WAR");
myMovies = ["RAMBO"];

myMovies = [...myMovies, "WAR", "DEMON SLAYER"];

console.log(myMovies) // output : ["GOT","WAR","RAMBO","WAR","DEMON SLAYER"]

const myNums = [2, 8, 10, 9, 12, 82];
myNums.sort((a, b) => a - b);
console.log(myNums) // output : [2, 8, 9, 10, 12, 82]

myNums.sort((a, b) => b - a);
console.log(myNums) // output : [82, 12, 10, 9, 8, 2]