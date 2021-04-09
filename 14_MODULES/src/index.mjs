//ES modules. Нативные модули JS. расширение .mjs
//Формат ES modules импорт:
//
//способ 2
// import { HELPERS } from './helpers/numbers.mjs';
//
// console.log(HELPERS.double(4), HELPERS.pow(5));
// console.log(HELPERS.helpersVersion);

//3
import helpersVersion, { double, pow} from './helpers/numbers.mjs';
//импорт из библиотеки lodash
import { random } from 'lodash-es';
console.log(random());

console.log(double(5), pow(5));
console.log(helpersVersion);

//4 импортируем ф-цию по умолчании
// import pow2 from './helpers/numbers.mjs';
// console.log(pow2(5));