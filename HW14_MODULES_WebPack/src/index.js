
import {sale,toPay,netProfit} from "./hw/HW1_variables_and_types/hw1.js";
import './hw/HW2_Cycles&Branching/style.css';
import {
    firstUserNumber,
    secondUserNumber,
    skipEvenNumbers,
    sumNumbers, pullNumber, SumRangeOfNumbers
} from "./hw/HW2_Cycles&Branching/main.js";
import {deleteDuplicateLetter,word} from './hw/HW3_Functions/main.js';

console.log('Import from HW1');
console.log(`Скидка: ${sale}`);
console.log(`К оплате: ${toPay}`);
console.log(`Чистая прибыль: ${netProfit}`);
console.log('_____________________________');

console.log('Import from HW2');
alert('It is a program for calculating the sum of all numbers in a given range. ' +
    'And also the calculation of the sum without paired numbers.');
firstUserNumber = pullNumber('first');
secondUserNumber = pullNumber('second');
skipEvenNumbers = confirm("Do you want to skip all paired numbers from a given range? " +
    "These numbers will not be taken into account in the calculation!");
sumNumbers();
alert(`Sum range of numbers: ${SumRangeOfNumbers}`);
console.log('_____________________________');

console.log('Import from HW3');
console.log(`Function №11: Remove letters from the expression "${word}" occurring more than once. =>
${deleteDuplicateLetter(word)}`);