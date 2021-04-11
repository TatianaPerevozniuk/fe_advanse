let firstUserNumber;
let secondUserNumber;
let skipEvenNumbers;
let SumRangeOfNumbers = 0;

alert('It is a program for calculating the sum of all numbers in a given range. ' +
    'And also the calculation of the sum without paired numbers.');
function pullNumber(textInputOrder){
    let userNumber;
    for (let i = 0; i < 3; i++) {
        const totalAttempts = 3;
        let attempts = totalAttempts - i;
        userNumber = Number(prompt(`${attempts} attempts left. Enter the ${textInputOrder} number: `));
        if (Number.isInteger(userNumber)) {
            break;
        } else alert('Incorrect input! Only enter numbers!');
    }
    return userNumber;
}
firstUserNumber = pullNumber('first');
secondUserNumber = pullNumber('second');

skipEvenNumbers = confirm("Do you want to skip all paired numbers from a given range? " +
    "These numbers will not be taken into account in the calculation!");
const sumNumbers = function() {
    const minNumber = Math.min(firstUserNumber,secondUserNumber);
    const maxNumber = Math.max(firstUserNumber,secondUserNumber);
    for(let count = minNumber;count <= maxNumber;count++){
        if(skipEvenNumbers && !(count % 2)){
            continue;
        }
        SumRangeOfNumbers += count;
    }
};
sumNumbers();
alert(`Sum range of numbers: ${SumRangeOfNumbers}`);

export {firstUserNumber, secondUserNumber, skipEvenNumbers,SumRangeOfNumbers,sumNumbers, pullNumber}