// JSON - JS Object Notation, формат который понимает браузер
// {
//     "name":"Serg",
//     "password": "1111"
// }
const  user = 'User';

// localStorage.setItem(key, data);
// localStorage.setItem('user', user);

// localStorage.setItem('user',JSON.stringify(user)); //кладем в localStorage
//
// const getUser = localStorage.getItem('user'); //извлекаем из localStorage
// console.log(getUser);
// // в localStorage данные могут храниться, пока мы не почистим localStorage
// //удалить можно методом setTimeout
// setTimeout(function () {
//     localStorage.removeItem('user')
// }, 6000);
//
//________________________________________

// const person = {
//     name: 'User',
//     password: 12356
// }
//
// localStorage.setItem('person', JSON.stringify(person));
//
// const getPerson = localStorage.getItem('person'); //извлекаем из localStorage
// //распарсить объект:
// const dataPerson = JSON.parse(getPerson);
//
// console.log(getPerson, 'json');
// console.log(dataPerson, 'obj');
//______________________________________________________

// // Простой пример авторизации в локальном хранилище
// //sessionStorage вместо localStorage  позволяет удалять всю историю после закрытия браузера
// const  password = '123456';
// const getPassword = localStorage.getItem('password');
//
// if(getPassword !== null) {
//
//     window.location.href = 'about.html' //после авторизации больше не переходит на страницу регистрации
//
// }
//
// document.getElementById('myForm').addEventListener('submit', signIn);
//
// function signIn(e) {
//     const input = document.querySelector('input');
//     if(input.value === password) {
//         e.preventDefault();
//         localStorage.setItem('password', JSON.stringify(password));
//         window.location.href = 'about.html'; //редирект
//     }
//     else {
//         alert('Неверный пароль!!!')
//     }
// }
//___________________________________________________________________
//JWT способ авторизации
// JWT - JS web token
//


