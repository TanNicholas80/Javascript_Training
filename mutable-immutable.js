// mutable: data origin ikut berubah
let stack = ["js", "golang", "python"];
let devStack = stack;

devStack.push("java", ".NET");
console.log(devStack)
console.log(stack)

// imutable: data origin tidak berubah
let skill = ["go", "java", "js", "ts"];
let tagSkill = skill.slice(1, 2);
let tagSkill2 = skill.slice(1);

console.log(skill);
console.log(tagSkill);
console.log(tagSkill2);

tagSkill2.push("php");
console.table([tagSkill2]);
console.table([skill]);