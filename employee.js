// Case Encapsulation : Teknik menyembunyikan properti agar tidak diakses langsung
// class : blueprint for creating objects
export default class Employee {

    #salary;

    // insert into employee value(empid, fullname, hiredate, salary)
    constructor(empId, fullName, hireDate, salary, role) {
        this.empId = empId;
        this.fullName = fullName;
        this.hireDate = hireDate;
        this.salary = salary;
        this.role = role;
    }

    get salary() {
        return this.#salary;
    }

    set salary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative");
        }

        if (newSalary > 1_000_000_000) {
            throw new Error("Salary cannot be more than 1 billion");
        }

        this.#salary = newSalary;
    }

    getMasaKerja() {
        if (!this.hireDate || isNaN(this.hireDate.getTime())) {
            console.error(`hiredate tidak valid: ${this.hireDate}`);
            return "0 tahun 0 bulan 0 hari";
        }

        const today = new Date();
        const years = today.getFullYear() - this.hireDate.getFullYear();
        const months = today.getMonth() - this.hireDate.getMonth();
        const days = today.getDate() - this.hireDate.getDate();

        // perbaiki nilai negatif untuk days
        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
            months--;
        }

        // perbaiki nilai negatif untuk months
        if (months < 0) {
            months += 12;
            years--;
        }

        // hitung sisa waktu dalam jam
        const hoursDiff = today.getHours() - this.hireDate.getHours();

        return `${years} tahun ${months} bulan ${days} hari ${hoursDiff} jam`;
    }

    getFormattedSalary(baseSalary) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(baseSalary);
    }

    getShortHireDate() {
        return this.hireDate.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    calculateTotalSalary() {
        return this.#salary;
    }

    toString() {
        return `
        EmpId : ${this.empId}
        FullName : ${this.fullName}
        HireDate : ${this.getShortHireDate(this.hireDate)}
        MasaKerja : ${this.getMasaKerja()}
        Role : ${this.role}
        Salary : ${this.salary}`;
    }
}

