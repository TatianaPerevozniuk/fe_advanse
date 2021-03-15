const ukraine = {tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = {tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = {tax: 0.15, middleSalary: 1509, vacancies: 1114};

// 1.
function getMyTaxes(salary) {
    return !isNaN(salary) ? salary * this.tax : 'Invalid data type. Enter the correct salary amount.';
}

const salary = 3545;
const myTaxes = getMyTaxes.call(ukraine, salary);
console.log(`Function №1: getMyTaxes(${salary}) in Ukraine -> ${myTaxes}`);

// 2.
function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

const MiddleTaxes = getMiddleTaxes.call(latvia);
console.log(`Function №2: getMiddleTaxes() in Latvia -> ${MiddleTaxes}`);

// 3.
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

const totalTaxes = getTotalTaxes.call(litva);
console.log(`Function №3: getTotalTaxes() in Litva -> ${totalTaxes}`);

// 4.
function getMySalary(country) {
    const delay = 10000;
    setInterval(() => {
        const maxRandom = 2000;
        const minRandom = 1500;
        const salary = Number((Math.random() * (maxRandom - minRandom) + minRandom).toFixed(2));
        const taxes = Number(getMyTaxes.call(country, salary).toFixed(2));
        const profit = Number((salary - taxes).toFixed(2));
        const mySalary = {
            salary,
            taxes,
            profit,
        };
        console.log(`Function №4: getMySalary(country) --> `, mySalary);
    }, delay);
}
getMySalary(ukraine);
