//CommonJS modules. расширение .cjs или .js(по умолчанию)
// Формат CommonJS применяется в Node.js и использует для определения зависимостей и модулей require и module.exports:
//
//Формат CommonJS импорт:
// var dep1 = require('./dep1');
// var dep2 = require('./dep2');
//
//Формат CommonJS экспорт:
// module.exports = function(){
//     // ...
// }

//Можем использавать в проэкте лишь один какой-то формат. или CommonJS или ES modules...!!!!!!!!!!!

const helpers = require('./helpers/numbers');
console.log(helpers.double);
// или можно деструктуризировать наш объект exports и взять оттуда ключ double
//результат будет таким же как выше
// const { double } = require('./helpers/numbers');
// console.log(double);

const four = helpers.double(4);
const pow = helpers.pow(5);
console.log(four, pow);
console.log(helpers.helpersVersion);

const greating = text => console.log(text);
greating('Hello');