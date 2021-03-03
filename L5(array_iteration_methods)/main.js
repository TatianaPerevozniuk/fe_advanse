// Методы перебора массивов
const numbers = [7,5,13,45,6,677];
function callback(element, index, target){
    console.log('element: ', element);
    console.log('index: ', index);
    console.log('target: ', target);
};

// Метод forEach() выполняет указанную функцию один раз
// для каждого элемента в массиве.
const forEach = (target, callback) => {
    for (let index = 0; index < target.length; index++) {
        callback(target[index], index, target);
    }
};
console.log(forEach(numbers,callback));

// Метод map() создаёт новый массив с результатом вызова указанной функции
// для каждого элемента массива.
function callback2(element, index, arr){
    return element + 2;
}
const map = (target, callback2) => {
    const newArray = [];
    for (let index = 0; index < target.length; index++) {
        const element = target[index];
        newArray.push(callback2(element, index, target));
    }
    return newArray;
};
const maped = map(numbers,callback2);
console.log(maped);


// Метод filter() создаёт новый массив со всеми элементами,
// прошедшими проверку, задаваемую в передаваемой функции.
function predicate(element, index, arr) {
    return element < 10;
}
// const filtered = numbers.filter(predicate);
// console.log(filtered);
const filtered = (arr, callback) => {
    const newArray = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const current = callback(element, index, arr);

        if (current) {
            newArray.push(element);
        }
    }

    return newArray;
};
console.log(filtered(numbers,predicate));


// Метод find() возвращает значение первого найденного в массиве элемента,
// которое удовлетворяет условию переданному в callback функции.
//  В противном случае возвращается undefined.
const users = [
    {name:'Vasya', age:12},
    {name:'Petya', age:45},
    {name:'Katya', age:23}
];
function callback3(user, index, arr){
    return user.age > 20;
}
console.log(users.find(callback3));
//Реализация функции find():
function find(arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const match = callback(element, index, arr);
        if (match) return element;
    }
}
console.log(find(users,callback3));

// Метод findIndex() возвращает индекс в массиве,
// если элемент удовлетворяет условию проверяющей функции.
// В противном случае возвращается -1.
console.log(users.findIndex(callback3));
//Реализация функции findIndex():
function findIndex(arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const match = callback(element, index, arr);
        if (match) return index;
    }
    return -1; //если элемент отсутствует в массиве, возвращает -1
}
console.log(findIndex(users,callback3));


// Метод every() проверяет, удовлетворяют ли все элементы массива
// условию, заданному в передаваемой функции.
function callback4(user, index, arr){
    return user.age > 20;
}
const isEvery = users.every(callback4);
console.log('every is: ', isEvery);
//Реализация функции every():
const every = (target, callback) => {
    for (let index = 0; index < target.length; index++) {
        const isTruthy = callback(target[index], index, target);

        if (!isTruthy) return false;
    }

    return true;
};
console.log('Every is: ', every(users,callback4));

// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива
// условию, заданному в передаваемой функции.
const isAny = users.some(callback4);
console.log('any is: ', isAny);
//Реализация функции some():
const some = (target, callback) => {
    for (let index = 0; index < target.length; index++) {
        const isTruthy = callback(target[index], index, target);

        if (isTruthy) return true;
    }

    return false;
};
console.log('Any is: ', some(users,callback4));

// Метод reduce() применяет функцию callback
// к каждому элементу массива (слева-направо),
// возвращая одно результирующее значение.
const sumAge = users.reduce(function (accumulator,curentElement){
    return accumulator + curentElement.age;
},0);
console.log('sumAge: ', sumAge);
//Реализация функции reduce():
function callback5(accumulator, curentElement, index, arr){
    return accumulator + curentElement.age;
}
function reduce(arr, callback, defaultValue) {
    const hasDefault = defaultValue !== undefined;

    if (!hasDefault && arr.length < 1) {
        throw new Error("Target could't be empty without initial value");
    }

    let accumulator = hasDefault ? defaultValue : arr[0];

    const from = hasDefault ? 0 : 1;

    for (let index = from; index < arr.length; index++) {
        accumulator = callback(accumulator, arr[index], index, arr);
    }
    return accumulator;
}

// Метод reduceRight() применяет функцию callback
// к  каждому значению массива (справа-налево),
// возвращая одно результирующее значение.
const reduceRight = (target, callback, defaultValue) => {
    const hasDefault = defaultValue !== undefined;

    if (!hasDefault && target.length < 1) {
        throw new Error("Target could't be empty without initial value");
    }

    let accumulator = hasDefault ? defaultValue : target[target.length - 1];

    const from = hasDefault ? target.length - 1 : target.length - 2;

    for (let index = from; index >= 0; index--) {
        accumulator = callback(accumulator, target[index], index, target);
    }

    return accumulator;
};


//EXAMPLE:
const users2 = [
    {name:'Vasya', age:12},
    {name:'Petya', age:45},
    {name:'Katya', age:23},
    {name:'Nata', age:12},
    {name:'Jenya', age:45},
    {name:'liuba', age:23},
    {name:'Dima', age:29},
    {name:'Kolia', age:23}
];
function callbackUsers2(accumulator, curentElement, index, arr){
    if (accumulator[curentElement.age] === undefined) {
        accumulator[curentElement.age] = [curentElement.name];
    }
    else {
        accumulator[curentElement.age].push(curentElement.name);
    }
    return accumulator;
}
console.log(users2.reduce(callbackUsers2,{}));
// И получим ключи 12, 23, 45 и их значения/массивы:
// {12: Array(2), 23: Array(2), 45: Array(2)}
// 12: (2) ["Vasya", "Nata"]
// 23: (2) ["Katya", "liuba"]
// 45: (2) ["Petya", "Jenya"]

// Метод sort() -----------------------------------------------
const string = ['Banana', 'orange', 'apple'];
const number = [400, 14, 2];
string.sort();
console.log(string);
//Получим массив ["Banana", "apple", "orange"]
//видим что у больших букв приоритет больше, чем у маленьких
number.sort();
console.log(number);
//Получим [14, 2, 400]
//это значит, что цифры были приведены к строкам, потом отсортированы, и потом положены в виде чисел
// И так происходит всегда, когда мы не передаем в функцию sort() никакого аргумента;
// т.е. когда функция предиката или колбэка не объявлена, по умолчанию массивы будут сортироваться как строки
function callbackSort(a, b) {
    return a - b; //сортировка по увеличению чисел
    // return b - a; сортировка по убыванию чисел
}
number.sort(callbackSort);
console.log(number);
//Получим [2, 14, 400]


