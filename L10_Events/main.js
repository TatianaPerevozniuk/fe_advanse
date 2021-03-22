// event
// EventListener
// ВСПЛЫТИЕ событий
// ДЕЛЕГИРОВАНИЕ событий

// 1.
// //Если мы дергаем какой-то ивент, то нам нельзя делать стрелочные функции, так как потеряем контекст,
// // в данном случае если бы это была стрелочная ф-ция, то контекстом this будет объект window

// function helloTeam() {
//     console.log(this); //this отловит эллемент
//     console.log('Hello Team!');
// }
// function byeTeam() {
//     console.log('Bye Team!');
// }
//
// document.querySelector('#myClick').onclick = function () {
//     helloTeam();
//     byeTeam();
// };

// ___________________________________________________________________________
// 2. EventListener  слушатель событий (onclick = null), то есть onclick св-во  вообще не трогаем, а браузер просто слушает,
// что будет по событию click
// <!-- нужно стараться не запихивать что-то в объекты, чтобы
// не усложнять чтение для браузера и кеширование объектов дом дерева, для этого используют EventListener -->
//И при таком слачаи, полностью обстрагируемся от анонимной ф-ции, которая вызывает два метода (см. выше)

// document.querySelector('#myClick').addEventListener('click', helloTeam);
// document.querySelector('#myClick').addEventListener('click', byeTeam);

// ___________________________________________________________________________
// 3. Если кликаем на одну из кнопок, другая не должна работать
// метод .addEventListener()  добавляет слушатель
// метод .removeEventListener() удаляет слушатель

// const optionA = document.querySelector('#optionA');
// const optionB = document.querySelector('#optionB');
//
// optionA.addEventListener('click', onOptionA); //первый аргумент - пишем само событие, в данном случаи - 'click', второй - метод
// optionB.addEventListener('click', onOptionB);//задача слушателя запустить метод по какому-то событию
//
// function onOptionA() {
//     console.log('AAA');
//     //после нажатия на кнопку optionA, нужно чтобы для кнопки optionB не работал работал слушатель,
//     // для этого используем метод удаления слушателя
//     optionB.removeEventListener('click',onOptionB);
// }
//
// function onOptionB() {
//     console.log('BBB');
//     optionA.removeEventListener('click',onOptionA);
// }

// ___________________________________________________________________________
//4. ВСПЛЫТИЕ событий
//Если у нас эл-ты вложенны и на каждом есть свой ивент, то они будут передаваться от родителей и срабатывать все.
// У нас есть вложенность по дивам, если мы нажимаем красный круг то сработают все три ивента,
//если на желтый, то сработает только желтый ивент и зеленый
// метод stopPropagation() запрещает всплытие
//АНОНИМНЫЕ Ф-ЦИИ НЕ ИСПОЛЬЗОВАТЬ В СЛУШАТЕЛЯХ (А ПИСАТЬ ОТДЕЛЬНО ИМЕНОВАННЫЕ, И В СЛУШАТЕЛЬ ВСТАВЛЯТЬ УЖЕ КАК АРГУМЕНТ),
// В ДАННЫЙ МОМЕНТ ИСПОЛЬЗУЕМ ЛИШЬ ДЛЯ ДЕМОНСТРАЦИИ!

const itemOne = document.querySelector('#item_1');
const itemTwo = document.querySelector('#item_2');
const itemThird = document.querySelector('#item_3');

itemOne.addEventListener('click',function (){
    console.log('111');
});
itemTwo.addEventListener('click',function (e){ //ловим наши ивенты e - event
    console.log('222');
    // console.log(e); // покажет то место в консоли, где мы кликнули
    //console.log(e.target); // через метод target можем вычислить по какому эл-ту в этом методе был клик
    e.stopPropagation(); //запретили всплытие с помощью метода stopPropagation(), срабатывает только этот ивент игнорируя родительские

});
itemThird.addEventListener('click',function (){
    console.log('333');
});

// ___________________________________________________________________________
//5. ДЕЛЕГИРОВАНИЕ событий
//В данном случаи всплытие не работает, так как мы на li не добавили никаких ивентов, а лишь на ul
const list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    //console.log(e.target);

    // if (e.target.tagName === 'LI') { // проверяем, если то, на что мы кликнули, его тег = LI, то тогда условие выполнится
    // }

    //e.target - ловим по какому эл-ту идет клик, .closest('li') - проверяет является ли выбранный эл-т эл-том 'li'
    if (e.target.closest('li')) { // НО если мы работаем с ивентами с EventListener с какими-то определенными, то у нас есть метод closest,
                                    // и нам не нужно делать каких-то сравнений, как было выше
        e.target.innerHTML = e.target.innerHTML ** 2; // эл-т после нажатия возводится в степень 2
    }
})

//Так мы можем работать с любыми эл-тами вложенными которые есть у нас, и это называется ДЕЛЕГИРОВАНИЕ событий
// ДЕЛЕГИРОВАНИЕ событий:
//     1. Делаем внешний блок. Помещаем все объекты внутрь него.
//     2. Ставим обработчик на внешний блок.
//     3. За счет всплытия события, происходящие на вложенных объектах, будут распространяться на внешний блок и запускать обработчик.
//     4. В обработчике получаем объект event. В свойстве event.target хранится ссылка на объект, на котором произошло событие.


// 6. ПРИМЕР
// кнопка которая позволяет добавить еще один номер телефона например
const addNumber = document.querySelector('#add-number');
addNumber.addEventListener('click', function () {
    const li = document.createElement('li'); //создаем еще один эл-т 'li'
    li.innerHTML = '10'; //по умолчанию допустим 10
    list.appendChild(li); //добавляем наш созданный выше эл-т в наш список
})

