import { Employee } from "./parent.js";

class Manager extends Employee {
    constructor(fullName, hireDate, salary, teamProfit) {
        super(fullName, hireDate, salary, "Manager");
        this.teamProfit = teamProfit;
    }

    //override 
    calculateBonus() {
        //gaji * 1.5 + 5% profit team
        return (this.salary * 1.5) + (this.teamProfit * 0.5);
    }
}


class Sales extends Employee {
    constructor(fullName, hireDate, salary, totalSales) {
        super(fullName, hireDate, salary, "Sales")
        this.totalSales = totalSales;
    }

    //oveeride dari employee
    calculateBonus() {
        return (this.salary * 1.5) + this.totalSales * 0.10;//dapet 10%
    }
}

export {Manager,Sales}