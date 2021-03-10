const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number;
// - яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
// Функція повинна викликатись через call та працювати с даними через this
function getMyTaxes(salary) {
    return !isNaN(salary) ? salary * this.tax : 'Invalid data type. Enter the correct salary amount.';
}
const salary = 3545;
const myTaxes = getMyTaxes.call(ukraine, salary);
console.log(`Function №1: getMyTaxes(${salary}) in Ukraine -> ${myTaxes}`);

// 2. Створіть функцію getMiddleTaxes.call(country) -> number;
// - яка рахує скільки у середньому податків платят IT-спеціалісти у кожній країні. (tax * middleSalary).
// Функція повинна викликатись через call та працювати с даними через this
function getMiddleTaxes() {return this.tax * this.middleSalary;}
const MiddleTaxes = getMiddleTaxes.call(latvia);
console.log(`Function №2: getMiddleTaxes() in Latvia -> ${MiddleTaxes}`);

// 3. Створіть функцію getTotalTaxes.call(country) -> number;
// - яка раху, скільки всього податків платить IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
// Функція повинна викликатись через call та працювати с даними через this
function getTotalTaxes(){
    return this.tax * this.middleSalary * this.vacancies;
}
const totalTaxes = getTotalTaxes.call(litva);
console.log(`Function №3: getTotalTaxes() in Litva -> ${totalTaxes}`);

// 4. Створіть функцію getMySalary(country)
// - яка буде писати в консоль об'єкт вида: { salary: number, taxes: number, profit: number }кожні 10 секунд.
// Значення salary- генеруйте випадковим чином у диапазона 1500–2000 . налоги - розраховуться в залежності від вибраної
// країни та значення заработная плата.
// прибыль = зарплата - налоги;