
function getMaxDigit( inputNumber){
    inputNumber = String(inputNumber)
    let maxDigit = 0;
    for(let i = 0; i < inputNumber.length; i++)
        if (maxDigit < inputNumber[i]) {
            maxDigit = inputNumber[i];
        }
    return Number(maxDigit);
}
console.log(getMaxDigit(673972));


function getNumberToAPower (number,power){
    let count = 1;
    for(let i = 0; i < power; i++){
        count *= number;
    }
    return count;
}
console.log(getNumberToAPower(4,3));


function firstLetterUp (str){
    if (!str) return str;
    const strLowerCase = str.toLowerCase();
    return strLowerCase[0].toUpperCase() + strLowerCase.slice(1);
}
console.log(firstLetterUp('taNia'));


function getAmountWithoutTax(sum){
    const tax = 0.195;
    let sumWithoutTax;
    sumWithoutTax = sum - sum * tax;
    return sumWithoutTax;
}
console.log(getAmountWithoutTax(1000));


function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log(getRandomNumber(10,5));


function countLetter(word, letter){
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if (word[i].toLowerCase() === letter.toLowerCase()) count++;
    }
    return count;
}
console.log(countLetter( 'Асталавіста','А'));


function convertCurrency(cur){
    const curLowerCase = cur.toLowerCase();
    const indexUSD = curLowerCase.indexOf('$');
    const indexUAH = curLowerCase.indexOf('uah');
    const exchangeRate = 25;
    let sum = 0;
    if (curLowerCase[indexUSD] === '$'){
        const numeralCur = Number(curLowerCase.substring(0,indexUSD));
        sum = numeralCur * exchangeRate;
        return `${cur} = ${sum}`+ 'UAH';
    }
    else if (curLowerCase[indexUAH] === 'u' && curLowerCase[indexUAH+1] === 'a' && curLowerCase[indexUAH+2] === 'h'){
        const numeralCur = Number(curLowerCase.substring(0,indexUAH));
        sum = numeralCur / exchangeRate;
        return `${cur} = ${sum}` + '$';
    }
    else {
        console.log("Invalid input. Please, enter the correct currency '$' or 'uah'!");
    }
}
console.log(convertCurrency('2500uah'));


function getRandomPassword(numberOfDigits = 8){
    if (Number.isInteger(numberOfDigits)){
        let password = [];
        for (let i = 0; i < numberOfDigits; i++){
            password[i] = Math.floor(Math.random()*10);
        }
        return Number(password.join(''));
    }
    else{
        return 'The input is incorrect. Enter an integer!';
    }
}
console.log(getRandomPassword());


document.writeln(`Function №1: ${getMaxDigit(673972)} </br>`);
document.writeln(`Function №2: ${getNumberToAPower(4,3)} </br>`);
document.writeln(`Function №3: ${firstLetterUp('taNia')} </br>`);
document.writeln(`Function №4: ${getAmountWithoutTax(1000)} </br>`);
document.writeln(`Function №5: ${getRandomNumber(5.3,10.5896)} </br>`);
document.writeln(`Function №6: ${countLetter( 'Асталавіста','А')} </br>`);
document.writeln(`Function №7: ${convertCurrency('2500uah')} </br>`);
document.writeln(`Function №8: ${getRandomPassword()} </br>`);