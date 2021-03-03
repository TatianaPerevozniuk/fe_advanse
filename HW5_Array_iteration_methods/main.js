//1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри:
//     length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
//     Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
function getRandomArray(length = 0, min = 0, max = 0) {
    if (Number.isInteger(length) && length >= 0 && Number.isInteger(min) && Number.isInteger(max)){
        let randomArray = [];
        for (let i = 0; i < length; i++) {
            randomArray.push(Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min));
        }
        return randomArray;
    } else return 'Incorrect data entry!';
}
const randomArray = getRandomArray(8, 10,-30);
console.log(randomArray);

//2.


//3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
//     НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
function getAverage(...numbers){
    const newArray = numbers.filter(number => Number.isInteger(number));
    return Number(newArray.reduce((accumulator,number) => accumulator + number / newArray.length,0).toFixed(2));
}
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));