// //Это представление DOM-дерева, которое браузер делает под капотом:
//
// const container = {
//     tagName: 'div',
//     classList: ['container'],
// };
// const title = {
//     tagName: 'h2',
//     id: 'main-title',
//     text: 'Title',
// };
// //Для вложенных элементов
// container.child = title;
// title.parent = container;
//
// const body = {
//     children: [container],
// };
//
// console.log(body.children[0].child)
// //__________________________________________________________________________


const title = document.querySelector('#main-title');
const title2 = document.getElementById('main-title');
console.log(title);
console.log(title2);

// const index = document.querySelector('.index');//то же что и код ниже, но код ниже будет искать
//                                                        // класс index внутри title, а не по всему документу
// console.log(index);
const index = title.querySelector('.index');//может ускорить нашу страницу
console.log(index);

const titles = document.querySelectorAll('h2');
titles.forEach(item => item.style.background = 'red') //меняет цвет фона

const titles2 = document.getElementsByClassName('title');
// titles2.forEach(item => item.style.background = 'red') //не поменяет цвет фона, метод forEach недоступный для html коллекци,
// // можно переделать html коллекцю на массив, есть несколько вариантов
////Вариант 1:
Array.from(titles2).forEach(item => item.style.background = 'blue');
//Вариант 2: использовать спред-оператор
[...titles2].forEach(item => item.style.background = 'pink');

//Изменить только один эллемент в массиве:
titles2[2].style.background = "green";
console.log(titles);
console.log(titles2);

console.log(index.closest('.container'));



const input = document.querySelector('.user-input');
console.log(input.value);
input.value = 'Oleg';
console.log(input.value);

//DATA ATTRIBUTES
// Представим, что у каждого юзера должен быть свой id, добавим index в usersList.forEach
const users = document.querySelector('.users');
const usersList = ['Oleg','Oleksiy'];
usersList.forEach((user,index) => addUserOld(user, index));
//и сохраняем index в самом html, обычно это делают через DATA ATTRIBUTE:
function addUserOld(user = input.value, id) {
    users.insertAdjacentHTML('afterbegin', `<p class="user" data-id = "${id}">${user}<\p>`); //DATA ATTRIBUTE
    input.value = '';
}

// Old
// function addUser() {
//     console.log(input.value);
//     // users.textContent += `<p>${input.value}<\p>`'; // не будет парсить теги
//     // users.innerHTML += `<p>${input.value}<\p>`; // подойдет если элемент небольшой, так как все врема перезаписывается users.innerHTML
//     users.insertAdjacentHTML('afterbegin', `<p>${input.value}<\p>`);
// }


function addUser() {
    //Если значения нету (!input.value), то добавляем класс (input.classList.add('invalid')) при нажатии на add ,бордер подсвечивается красным,
    // после введения имени и его отправки бордер обратно становится серым (удаляем класс - input.classList.remove('invalid'))
    if (!input.value) {
        input.classList.add('invalid');
        return;
    } else {
        input.classList.remove('invalid');
    }
    users.insertAdjacentHTML('afterbegin', `<p class="user">${input.value}<\p>`);
    input.value = '';
}




// const select = document.querySelector('select');
// console.dir(select);
// select.value;
// console.log(select.value);