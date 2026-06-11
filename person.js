//abstract class : blueprint untuk parent class
class AbstractPerson {
    constructor(fullName) {

        if (this.constructor === AbstractPerson) {
            throw new Error("Abstract Class 'AbstractPerson' tidak bisa dibuat objeknya!");
        }

        this.id = Math.floor(Math.random() * 100) + 1;
        this.fullName = fullName
    }

    //method abstract
    displayInfo() {
        throw new Error("Method displayInfo harus diimplementasikan di child class")
    }
}

//parent class
class Customer extends AbstractPerson {
    constructor(fullName, totalOrder) {
        super(fullName)
        this.totalOrder = totalOrder;
    }

    displayInfo() {
        return `
        Id : ${this.id}
        FullName : ${this.fullName}
        TotalOrder : ${this.totalOrder}
        `
    }
}

class Employee extends AbstractPerson {
    constructor(fullName, hireDate, salary, role) {
        super(fullName)
        this.salary = salary
        this.role = role;
    }

    displayInfo() {
        return `
        EmpId : ${this.id}
        FullName : ${this.fullName}
        HireDate : ${this.hireDate}
        Salary : ${this.salary}
        Role : ${this.role}
        `
    }
}


export { Customer, Employee }