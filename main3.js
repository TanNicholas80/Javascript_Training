import { Employee } from "./parent.js";
import { Manager,Sales } from "./child.js";
import payroll from "./payroll.js";
import * as helper from './helpers.js'


//implmentasi polymorphims

const payrollList = [
    new Employee("Rini", new Date(2020, 2, 12), 5_000_000, "Developer"),
    new Sales("Kang Dian", new Date(2020, 2, 12), 6_000_000, 150),
    new Sales("Wini Widi", new Date(2020, 2, 12), 6_500_000, 350),
    new Manager("Eka", new Date(2020, 2, 12), 7_000_000, 500)
]

payrollList.forEach(emp => {

    //tanpa polymorhpism
    /* if (emp.constructor.name === 'Employee'){
        const bonusEmployee= calculateBonusEmployee();
    }else if (emp.constructor.name === 'Sales'){
        const bonusSales = calculateBonusSales();
    }*/ 

    const bonus = emp.calculateBonus();

    console.log(`Bonus Akhir Tahun untuk ${emp.fullName} (${emp.constructor.name}):`);
    console.log(`-> Rp ${bonus.toLocaleString('id-ID')}`);
    console.log('----------------------------------------------------');

});

const totalPayroll = payroll.calculateTotalPayroll(payrollList);
console.log(`Total Payroll : ${helper.getFormattedSalary(totalPayroll)}`);

const totalPayrollSales = payroll.calculateTotalPayrollWithEmpType(payrollList,"Sales");
console.log(`Total Payroll Sales: ${helper.getFormattedSalary(totalPayrollSales)}`);