const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number;
// - яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
// Функція повинна викликатись через call та працювати с даними через this
function getMyTaxes(salary) {
        return salary * this.tax;
}
const myTaxes = getMyTaxes.call(latvia, 1000);
console.log(myTaxes);

// 2. Створіть функцію getMiddleTaxes.call(country) -> number;
// - яка рахує скільки у середньому податків платят IT-спеціалісти у кожній країні. (tax * middleSalary).
// Функція повинна викликатись через call та працювати с даними через this

// 3. Створіть функцію getTotalTaxes.call(country) -> number;
// - яка раху, скільки всього податків платить IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
// Функція повинна викликатись через call та працювати с даними через this

// 4. Створіть функцію getMySalary(country)
// - яка буде писати в консоль об'єкт вида: { salary: number, taxes: number, profit: number }кожні 10 секунд.
// Значення salary- генеруйте випадковим чином у диапазона 1500–2000 . налоги - розраховуться в залежності від вибраної
// країни та значення заработная плата.
// прибыль = зарплата - налоги;