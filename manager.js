import Employee from './employee.js';

export default class Manager extends Employee {
    constructor(empId, fullName, hireDate, salary, role, allowance) {
        super(empId, fullName, hireDate, salary, role);
        this.allowance = allowance;
        this.managedTeams = [];
    }

    addTeamMember(employee) {
        this.managedTeams.push(employee);
    }

    displayTeam() {
        this.managedTeams.forEach(emp => {
            console.log(emp.toString());
        });
    }

    // override 
    calculateTotalSalary() {
        return this.salary + this.allowance;
    }

    toString() {
        return `
        ${super.toString()}
        Allowance : ${this.getFormattedSalary(this.allowance)}
        Total Salary : ${this.getFormattedSalary(this.calculateTotalSalary())}
        `
    }
}