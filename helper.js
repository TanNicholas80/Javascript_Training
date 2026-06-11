function getFormattedSalary(baseSalary) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(baseSalary);
}

function getShortHireDate() {
    return this.hireDate.toLocaleDateString('id-ID', {
        day: '2-digit',   // Output selalu 2 digit, misal: 01, 02
        month: '2-digit', // Misal: 01, 02, 12
        year: 'numeric'   // 2022
    });
}

export {getFormattedSalary,getShortHireDate}