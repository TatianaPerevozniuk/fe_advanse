
function getMaxDigit( inputNumber){
    inputNumber = String(inputNumber)
    let maxDigit = 0;
    for(let i = 0; i < inputNumber.length; i++)
        if (maxDigit < inputNumber[i]) {
            maxDigit = inputNumber[i];
        }
    return Number(maxDigit);
}
const userNumber = 673972;
const funGetMaxDigit = getMaxDigit(userNumber);
document.writeln(`Function №1: Maximum digit in a number ${userNumber} => ${funGetMaxDigit} </br>`);

function getNumberToAPower (number,power){
    let count = 1;
    for(let i = 0; i < power; i++){
        count *= number;
    }
    return `${number} ^ ${power} = ${count}`;
}
const funGetNumberToAPower = getNumberToAPower(4,3);
document.writeln(`Function №2: ${funGetNumberToAPower} </br>`);


function firstLetterUp (str){
    if (!str) return str;
    const strLowerCase = str.toLowerCase();
    return strLowerCase[0].toUpperCase() + strLowerCase.slice(1);
}
const userName = 'taNia';
const funFirstLetterUp = firstLetterUp(userName);
document.writeln(`Function №3: ${userName} => ${funFirstLetterUp} </br>`);

function getAmountWithoutTax(sum){
    const tax = 0.195;
    let sumWithoutTax;
    sumWithoutTax = sum - sum * tax;
    return sumWithoutTax;
}
const salary = 1000;
const funGetAmountWithoutTax = getAmountWithoutTax(salary);
document.writeln(`Function №4: Salary without tax. ${salary} => ${funGetAmountWithoutTax} </br>`);


function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
const floorNumber = 5;
const ceilNumber = 10;
const funGetRandomNumber = getRandomNumber(floorNumber,ceilNumber);
document.writeln(`Function №5: Random number from range [${floorNumber}; ${ceilNumber}] => ${funGetRandomNumber} </br>`);


function countLetter(word, letter){
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if (word[i].toLowerCase() === letter.toLowerCase()) count++;
    }
    return `The letter "${letter}" in the word "${word}" occurs ${count} times`;
}
const funCountLetter = countLetter( 'Асталавіста','а');
document.writeln(`Function №6: ${funCountLetter} </br>`);


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
const funConvertCurrency = convertCurrency('2500uah');
document.writeln(`Function №7: Currency exchange => ${funConvertCurrency} </br>`);


function getRandomPassword(numberOfDigits = 8){
    if (Number.isInteger(numberOfDigits)){
        let password = [];
        for (let i = 0; i < numberOfDigits; i++){
            password[i] = Math.floor(Math.random()*10);
        }
        return `Generated ${numberOfDigits}-digit password => ${Number(password.join(''))}`;
    }
    else{
        return 'The input is incorrect. Enter an integer!';
    }
}
const funGetRandomPassword = getRandomPassword();
document.writeln(`Function №8: ${funGetRandomPassword} </br>`);


function deleteLetters(letter,word){
    const letterToLowerCase = letter.toLowerCase();
    const wordToLowerCase = word.toLowerCase();
    let newWord = '';
    for (let i = 0; i < wordToLowerCase.length; i++){
        if (wordToLowerCase[i] !== letterToLowerCase){
            newWord += wordToLowerCase[i];
        }
    }
    return `Remove the letter "${letter}" from the sentence "${word}" => ${newWord}`;
}
const funDeleteLetters = deleteLetters('a', "blablabla");
document.writeln(`Function №9: ${funDeleteLetters} </br>`);

function isPalindrome(str){
    str = str.replace(/\s/g, '').toLowerCase();
    for (let i = 0; i < str.length/2; i++){
        if (str[i] !== str[str.length-1-i]){
            return false;
        }
    }
    return true;
}
const expressionPalindrome = "Я несу гусеня";
console.log(isPalindrome(expressionPalindrome));
document.writeln(`Function №10: Is the expression "${expressionPalindrome}" a palindrome? - ${isPalindrome(expressionPalindrome)} </br>`);

function deleteDuplicateLetter(str){
    str = str.toLowerCase();
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        let countLetter = str.split(str[i]).length-1;
        if (countLetter > 1){
            continue;
        }
        newStr += str[i];
    }
    return newStr;
}
const word = "Бісквіт був дуже ніжним";
console.log(deleteDuplicateLetter(word));
document.writeln(`Function №11: Remove letters from the expression "${word}" occurring more than once. => ${deleteDuplicateLetter(word)}`);