document.write(`<h1>HW5_Array_iteration_methods </br></h1>`);
//1
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
document.write(`Function №1:  getRandomArray(8, 10,-30) => ${randomArray} </br>`);

//2.
document.write(`Function №2: {} </br>`);

//3
function getAverage(...numbers){
    const newArray = numbers.filter(number => Number.isInteger(number));
    return Number(newArray.reduce((accumulator,number) => accumulator + number / newArray.length,0).toFixed(2));
}
const average = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(average);
document.write(`Function №3:  getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) => ${average} </br>`);

// 4
function getMedian(...numbers) {
    const newArray = numbers.filter(number => Number.isInteger(number));
    newArray.sort((a,b) => a-b);
    const lowMiddle = Math.floor( (newArray.length - 1) / 2);
    const highMiddle = Math.ceil( (newArray.length - 1) / 2);
    return ( newArray[lowMiddle] + newArray[highMiddle]) / 2;
}
const median = getMedian(6, 2, 55, 11, 'jhj', 78, 2, 6.7, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(median);
document.write(`Function №4: getMedian(6, 2, 55, 11, 'jhj', 78, 2, 6.7, 55, 77, 57, 87, 23, 2, 56, 3, 2) => ${median} </br>`);

//5
function filterEvenNumbers(...numbers) {
    return numbers.filter(number => number%2 && Number.isInteger(number));
}
const evenNumbers = filterEvenNumbers(1, 2, -3, 4, 5, 4.3,'apple','7', 6);
console.log(evenNumbers);
document.write(`Function №5: filterEvenNumbers(1, 2, -3, 4, 5, 4.3,'apple','7', 6) => ${evenNumbers} </br>`);

//6
function countPositiveNumbers(...numbers) {
    return numbers.filter(number => number > 0 && typeof number === 'number').length;
}
const countPositive = countPositiveNumbers(1, -2, 3, -4, -5, 6, 6.7, '5', 'apple');
console.log(countPositive);
document.write(`Function №6: countPositiveNumbers(1, -2, 3, -4, -5, 6, 6.7, '5', 'apple') => ${countPositive} </br>`);

//7
function getDividedByFive(...numbers) {
    return numbers.filter(number => number%5 === 0 && Number.isInteger(number));
}
const dividedByFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 5.5, '5','apple');
console.log(dividedByFive);
document.write(`Function №7: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 5.5, '5','apple')) => 
${dividedByFive} </br>`);

//8
function replaceBadWords(string) {
    let newArr = string.split(' ');
    newArr =  newArr.map((word) => {
        const badWords = ['shit', 'fuck'];
        return word.toLowerCase().split(badWords[0]).join('****').split(badWords[1]).join('****');
    }).join(' ');
    return newArr[0].toUpperCase() + newArr.slice(1);
}
const replaceBadWord = replaceBadWords("Holy shit Fucking! It's bullshit!");
console.log(replaceBadWord);
document.write(`Function №8: replaceBadWords("Holy shit Fucking! It's bullshit!") => ${replaceBadWord} </br>`);

//9.
document.write(`Function №9: {} </br>`);

//10.
document.write(`Function №10: {} </br>`);