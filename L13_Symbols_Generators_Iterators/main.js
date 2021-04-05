/**
 * Symbol
 */
// Symbol() - примитивный тип данных, часто используют для ключей в объекте. Когда мы Symbol используем как ключ,
// он приводится к строке, но к скрытой уникальной строке. Получается скрытый ключ. Таким образом можем не пересекать
// создаваемые динамические эти ключи
// const generalSymbol = Symbol('general')

// const errors = [
//   {
//     field: "name",
//     message: "Field is empty"
//   },
//   {
//     field: "email",
//     message: "Field is empty"
//   },
//   {
//     field: "email",
//     message: "Email is not valid"
//   },
//   {
//     message: "Too many requests"
//   },
//   {
//     message: 'Cart is empty'
//   },
//   {
//     field: "general",
//     message: "General field is not valid"
//   }
// ];

// const fieldErrors = errors.reduce((previous, current) => {
//   const field = current.field || generalSymbol;

//   const newObj = { ...previous };

//   if (previous[field]) {
//     newObj[field].push(current);
//   } else {
//     newObj[field] = [current];
//   }

//   return newObj;
// }, {});

// console.log(fieldErrors);
// console.log(fieldErrors[generalSymbol]);

//----------------------------------------------------------
//Варианты создания Symbol:
// let sym1 = Symbol()  //через функцию, эта ф-ция не конструктор, то есть нельзя писать new перед Symbol()
// тут Symbol создается локально
// let sym2 = Symbol('foo')
// let sym3 = Symbol('foo')

// console.log(sym1.description); //>> undefined // так как description в функцию Symbol() не передавали
// console.log(sym2 === sym3);  //>> false // Symbol создается каждый раз локально и каждый раз уникально
//sym2 и sym3 совершенно два разных уникальных символа не смотря на то, что description одинаковый

// console.log(Symbol.for("bar") === Symbol.for("bar")); // .for("key") через for просим какойто ключь,
// если его еще не было - он создается (.for сздает глобальный символ) ,
// если он уже был то достается (.for достает глобальный символ из реестра)

// const globalSym = Symbol.for('foo') // через  метод for объект Symbol создается глобально
// console.log(Symbol.keyFor(globalSym)); // через метод keyFor получаем ключь у данного символа (globalSym)

// const localSym = Symbol() // Symbol создан локально
// console.log(Symbol.keyFor(localSym)); //>> undefined // так как Symbol создан локально

//-------------------------------------------------------------------
// const obj1 = {
//   foo: 'bar'
// }

// const a = Symbol('a')
// const b = Symbol.for('b')

// obj1[a] = 'localSymbol'
// obj1[b] = 'globalSymbol'

// const objectSymbols = Object.getOwnPropertySymbols(obj1) // метод .getOwnPropertySymbols - узнает сколько ключей на объекте

// console.log(objectSymbols);
// console.log(Object.keys(obj1)); // >>'foo'
// console.log(Reflect.ownKeys(obj1)); // >>['foo', null, null] //null - скрытые ключи(символы)
//-------------------------------------------------------------------

// console.log(
//   JSON.stringify(
//     {
//       [Symbol('foo')]: 'foo'  //>> {} //при стирилизации символ не останется в строке
//     }
//   )
// );
//-------------------------------------------------------------------
//Object.assign и спред оставляет эти символы
// const ageSymbol = Symbol("age");

// const user1 = {
//   name: "Bob",
//   [ageSymbol]: 22
// };

// // const user2 = Object.assign({}, user1)
// const user2 = { ...user1 };

// console.log(user2[ageSymbol]);

/**
 * Iterators
 */
//-------------------------------------------------------------------
// for (const char of 'test') {
//   console.log(char);
// }

// <===>

// const str = "test";

// console.log(typeof str[Symbol.iterator]);

// const iterator = str[Symbol.iterator](); //в нашей строке str получили итератор

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
//-------------------------------------------------------------------

// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   let nextIndex = start;
//   let iterationCount = 0;

//   return {
//     next: function () {
//       let result;

//       if (nextIndex < end) {
//         result = { value: nextIndex, done: false };
//         nextIndex += step;
//         iterationCount++;

//         return result;
//       }

//       return { value: iterationCount, done: true };
//     },
//     [Symbol.iterator]: function () {  //создали собственный объект с итератором, который теперь можем использовать в цикле for
//       return this;
//     }
//   };
// }

// const rangeIterator = makeRangeIterator(1, 10, 2);

// // console.log(rangeIterator.next());
// // console.log(rangeIterator.next());
// // console.log(rangeIterator.next());
// // console.log(rangeIterator.next());
// // console.log(rangeIterator.next());
// // console.log(rangeIterator.next());

// for (const item of rangeIterator) {
//   console.log(item);  //чтобы for начал работать с нашим объектом, как с итератором(итерируемым объектом),
//   он ищет определенное свойство, самый простой способ дать ему с этим работать - это создать Symbol
// }

// for (const item of rangeIterator) {
//   console.log(item);    // второй цикл не сработает
// }

//-----------------------------------------------------------------------
// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   let nextIndex = start;
//   let iterationCount = 0;

//   return {
//     next: function () {
//       let result;

//       if (nextIndex < end) {
//         result = { value: nextIndex, done: false };
//         nextIndex += step;
//         iterationCount++;

//         return result;
//       }

//       return { value: iterationCount, done: true };
//     }
//   };
// }

// function createRange(start = 0, end = Infinity, step = 1) {
//   return {
//     [Symbol.iterator]: () => makeRangeIterator(start, end, step) //каждый раз создается итератор
//   };
// }

// const range = createRange(1, 10, 2);

// for (const item of range) {
//   console.log(item);
// }

// for (const item of range) {
//   console.log(item);
// }


//-------------------------------------------------------------
/**
 * Generator позволяет описывать итерационный какой-то алгоритм, но этот алгоритм выполняться может не постояноо
 */
// function* - функция генератор

// function* makeRangeGenerator(start = 0, end = 100, step = 1) {
//   let iterationCount = 0

//   for (let index = start; index < end; index += step) {
//     iterationCount++
//     yield index
//   }

//   return iterationCount
// }

// const rangeGenerator = makeRangeGenerator(1, 10, 2)

// for (const item of rangeIterator) {
//   console.log(item);
// }

// console.log(rangeGenerator.next())
// console.log(rangeGenerator.next())
// console.log(rangeGenerator.next())
// console.log(rangeGenerator.next())
// console.log(rangeGenerator.next())
// console.log(rangeGenerator.next())

//------------------------------------------------------------------------
// function* yeildAndReturn() {
//   yield 'Y';  //дает значение 'Y'
//   return 'R';  // после return дальнейшие yield не работают
//   yield 'unreachable'
// }

// const gen = yeildAndReturn()

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

//------------------------------------------------------------------------
//Как можно сделать наш собственный итератор, используя генератор?

// function createRange(start = 0, end = Infinity, step = 1) {
//   return {
//     *[Symbol.iterator]() {           // с '*' описываем уже генератор, а не просто функцию!!
//       let iterationCount = 0

//       for (let i = start; i < end; i += step) {
//         iterationCount++
//         yield i
//       }

//       return iterationCount
//     }
//   }
// }

// const range = createRange(1, 10, 2)

// for (const item of range) {
//   console.log(item);
// }


//---------------------------------------------------------------------------------
//Комбинировать генераторы--------------------------------------------

// function* generateSequence(start, end) {
//   for (let index = start; index <= end; index++) {
//     yield index
//   }
// }

// function* generatePasswordCodes() {
//   // 0..9
//   yield* generateSequence(48, 57)

//   // A..Z
//   yield* generateSequence(65, 90)

//   // a..`
//   yield* generateSequence(97, 122)
// }

// console.log(String.fromCharCode(...generatePasswordCodes()));

//------------------------------------------------------------------------------

// function* order() {
//   const result = yield 'food'

//   console.log(result);
// }

// const orderGenerator = order()

// if (orderGenerator.next().value === 'food') {
//   orderGenerator.next('thanks')
// }
//------------------------------------------------------------------------------
//этот генератор может генерировать до бесконечности

// function* generate() {
//   while (true) {
//     yield 1
//   }
// }

// for (const item of generate()) {
//   console.log(item);
// }
//-----------------------------------------------------------------------
//Числа фибоначи - их последовательность определяется как сложение текущего значения с предыдущем, (1,2,3,5,8,13,21,...)
// function* fibonacci() {
//   let current = 0
//   let next = 1

//   while (true) {
//     yield current;
//     [current, next] = [next, next + current]
//   }
// }

// const sequence = fibonacci()
// const array = []

// for (let index = 0; index < 10000; index++) {
//   array.push(sequence.next().value)
// }

// console.log(array);
//-----------------------------------------------------------------------

//Асинхронные итераторы (дают возможность баловаться с задержкой(но вообще не стоит баловаться с задержкой))
//-----------------------------------------------------------------------
// const range = {
//   start: 1,
//   end: 5,

//   [Symbol.asyncIterator]() {
//     return {
//       current: this.start,
//       last: this.end,

//       async next() {
//         await new Promise(r => setTimeout(r, 1000))

//         if (this.current <= this.last) {
//           return { done: false, value: this.current++}
//         } else {
//           return { done: true }
//         }
//       }
//     };
//   }
// };

// (async () => {
//   for await (let value of range) {
//     console.log(value);
//   }
// })()
//-----------------------------------------------------------------------

//Асинхронный генератор
//-----------------------------------------------------------------------
// async function* generate(start, end) {
//   for (let index = start; index <= end; index++) {
//     await new Promise((r) => setTimeout(r, 1000));
//     yield index;
//   }
// }

// (async () => {
//   const generator = generate(1, 5);

//   for await (let value of generator) {
//     console.log(value);
//   }
// })();
