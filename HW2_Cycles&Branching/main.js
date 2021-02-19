let firstUserNumber;
let secondUserNumber;
let skipEvenNumbers;
let SumRangeOfNumbers = 0;

alert('It is a program for calculating the sum of all numbers in a given range. ' +
    'And also the calculation of the sum without paired numbers.');
function pullNumber(textInputOrder){
    let userNumber
    for (let i = 0; i < 3; i++) {
        let attempts = 3 - i;
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

if(firstUserNumber <= secondUserNumber){
    for(let count = firstUserNumber;count <= secondUserNumber;count++){
        if (skipEvenNumbers){
            if(count % 2 === 0){
                continue;
            }
            SumRangeOfNumbers += count;
        }
        else {
            SumRangeOfNumbers += count;
        }
    }
    alert(`Sum range of numbers: ${SumRangeOfNumbers}`);
}
else {
    for (let count = firstUserNumber; count >= secondUserNumber; count--) {
        if (skipEvenNumbers) {
            if (count % 2 === 0) {
                continue;
            }
            SumRangeOfNumbers += count;
        } else {
            SumRangeOfNumbers += count;
        }
    }
    alert(`Sum range of numbers: ${SumRangeOfNumbers}`);
}

