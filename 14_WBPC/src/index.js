console.log('Hello');
// pow = 5;
//
// console.log(pow(5));

// //_____Инкапсуляция____________________
// console.log($HELPERS);
// console.log($HELPERS.pow(5));

//второй способ разбиения на модули-----------------------------
import { pow } from './helpers.js';
import './style.css';
console.log(pow(49));
//если выбивает ошибку, нужно подключить скрипт в html с типом мудуль
//в скрипте подключенном, как модуль нельзя использовать document.write()
//так как он асинхронный и на момент когда мы подключаем модуль мы
//не можем изменять DOM напрямую,
//Но мы можем допустим сделать document.appendChild()

