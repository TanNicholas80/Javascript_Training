function calculateTotalPayroll(employeeList) {
    let total = 0;
    employeeList.forEach(emp => {
        const bonus = emp.calculateBonus();

        total += bonus;

    });

    return total;
}


function calculateTotalPayrollWithEmpType(employeeList, empType) {
    let total = 0;
    employeeList.forEach(emp => {

        if (emp.constructor.name === empType) {

            const bonus = emp.calculateBonus();

            total += bonus;
        }


    });

    return total;
}

export default {calculateTotalPayroll,calculateTotalPayrollWithEmpType}