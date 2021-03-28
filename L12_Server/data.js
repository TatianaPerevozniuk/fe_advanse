// const getPassword = localStorage.getItem('password');
//
// if(getPassword === null) {
//
//     window.location.href = 'index.html'
//
// }
//написать логаут для чистки localStorage и переброса на страницу регистрации


// request = запрос к серверу с клиента
//
// response = ответ с сервера
//
// //промежуточное ПО
// proxy server:
//     1. Apache - старое (сейчас больше php)
//     2. Nginx - новое
//
//
// http(s)://url
// {
//  //тело запроса
// }
//
// XMLHttpRequest - относится к API браузера, API - код который умеет работать с нашими запросами и ответами


// fetch('url')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => console.log(data))

// fetch('https://swapi.dev/api/people/')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//         const people = data.results;
//         people.map((p, i) => console.log(p.name))
//     })


//axios - библиотека https://github.com/axios/axios,
// надстройка над fetch, сам парсит, <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
axios.get('https://swapi.dev/api/people/')
    .then((res) => {
        console.log(res.data)
        const people = res.data.results;
        people.map((p, i) => console.log(p.name))
    })



//REST api

// CRUD
//
// C - create(post)
// R - read(get)
// U - update(put, update)
// D - delete(delete)

// // Статусы запросов
// 2.. - success(успешные)
// 3.. - redirection(перенаправления)
// 4.. - client error(ошибки клиента)
// 5.. - server error(ошибки сервера)

