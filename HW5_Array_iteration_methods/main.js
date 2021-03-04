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


// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5
// Приклад: getMedian(1, 2, 3, 4, 5) –> 3
function getMedian(...numbers) {
    const newArray = numbers.filter(number => Number.isInteger(number));
    newArray.sort((a,b) => a-b);

    const lowMiddle = Math.floor( (newArray.length - 1) / 2);
    const highMiddle = Math.ceil( (newArray.length - 1) / 2);
    return ( newArray[lowMiddle] + newArray[highMiddle]) / 2;
}
console.log(getMedian(6, 2, 55, 11, 'jhj', 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(getMedian(1, 2, 3, 4, 6.7, 5));
console.log(getMedian(1, 2, 3, 4));

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
function filterEvenNumbers(...numbers) {
    return numbers.filter(number => number%2 && Number.isInteger(number));
}
console.log(filterEvenNumbers(1, 2, -3, 4, 5, 4.3,'apple','7', 6));

//6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
function countPositiveNumbers(...numbers) {
    return numbers.filter(number => number > 0 && typeof number === 'number').length;
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6, 6.7, '5', 'apple'));

//7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті,
// які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]
function getDividedByFive(...numbers) {
    return numbers.filter(number => number%5 === 0 && Number.isInteger(number));
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 5.5, '5','apple'));