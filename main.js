import Employee from './employee.js';
import Manager from './manager.js';
// Create Object
// 1 object = 1 row
try {
    const emp1 = new Employee(1, "John Doe", new Date('2021-01-01'), 5000000, "Developer");
    const emp2 = new Employee(2, "Jane Doe", new Date('2021-01-01'), 6000000, "QA");
    const emp3 = new Employee(3, "Nicholas", new Date('2021-01-01'), 7000000, "UI/UX");

    // tampa encapsulation
    emp1.salary = 10000000;
    emp2.salary = 100_000_000;

    // table employees
    const empList = [emp1, emp2, emp3];

    const manager = new Manager(1, "John Doe", new Date('2021-01-01'), 5000000, "Manager", 1000000);
    manager.addTeamMember(empList);

    empList.forEach(emp => {
        console.log(emp.toString());
    })

    console.log(manager.toString());
    
    manager.displayTeam();
} catch (error) {
    console.log(error.message);
}