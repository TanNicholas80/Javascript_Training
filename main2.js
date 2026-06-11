import { Customer,Employee } from "./person.js";

//const person = new AbstractPerson("Kang diian")

const customer = new Customer("Rini", 100);

const emp = new Employee("Wini", new Date(2023, 1, 20), 9_000_000, "QA");

//console.log(person.displayInfo())

console.log(customer.displayInfo())
console.log(emp.displayInfo());