// https://swapi.dev – Працювати необхідно з цим API.
//     Інформацію про те, як влаштовано АПІ шукайте в документації!
//     Дуже заохочується максимально креативний підхід до цього завдання – робіть стилі, додайте який-небудь приємний шрифт
//     (Якщо зовсім туго з ідеями шрифтів візьміть Roboto с Google Fonts).
//
// 1.  Створіть кнопку: "отримати інформацію". При натисканні на неї отримайте та відобразіть інформацію про усіх
// персонажів 5 епізоду зоряних війн(films/2). Зверніть увагу, що необхідно вивчити документацію та на її основі вивести
// інформацію
// Виводимо тільки: повне ім'я персонажа, дата народження, стать(якщо зробите іконкою, буде взагалі ідеально).
// БОНУС ПЛЮС: Якщо додумаєтесь, як зберігати і виводити фотки персонажів – буде дуже круто.
// Я дам підказку: можна створити об'єкт з ключ=посилання_на_персонажа, значення=посилання_на_фотку
// У самому АПІ фотографій нмає, але ДЗшка стане набагато приємніше виглядати з зображеннями персонажів!
//
// 2.  Виведіть список усіх планет, які були у зоряних війнах.
//
// 3.  Додайте кнопку next, яка завантажить наступну сторінку зі списком планет. Попередня сторінка при цьому має пропасти.
// (відбувається заміна даних)
//
// 4.  ADVANCED: додайте до 1 завдання поле вводу з номером фільму(номер по порядку випуску фильму). Тепер при натисканні
// на кнопку – необхідно отримати інформацію не про 5тий епізод, а про фільм, номер якого вказано у полі вводу.
// Якщо вказана цифра 1 – потрібно передати запит на /films/1
//
// 5.  ADVANCED: Додайте кнопку перекладу на вукийську мову. Після натискання на кнопку – весь отриманий по апі контент
//     повинен перекластись на мову вуки.
//     Для цього достатньо додати до будь-якого запиту: ?format=wookiee.
//     При фантазії – можете ще і текст кнопок перекласти :)

// Information to reach API
const urlFilms = 'https://swapi.dev/api/films/';
const urlPlanets = 'https://swapi.dev/api/planets/?page=';
let nextPagePlanets = 1;
// const wookieeParams = '?format=wookiee';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('.submit');
const btn_getPlanets = document.querySelector('.btn_getPlanets');
const btn_nextPlanets = document.querySelector('.btn_nextPlanets');
const responseField = document.querySelector('#responseField');

//--------------------getInformationCharacters----------------------------------------------------
const getInformation = async () => {
        const inputQuery = inputField.value;
        const endpointFilms = await axios.get(`${urlFilms}${inputQuery}/`);
        const urlsPeople = endpointFilms.data.characters;
        const endpointsPeople = urlsPeople.map((url) => url.replace('http', 'https'));
        endpointsPeople.forEach(endpoint => getInfo(endpoint));
}

const getInfo = async (url) => {
    const urlPeople = await axios.get(url);
    const name = urlPeople.data.name;
    const birth_year = urlPeople.data.birth_year;
    const gender = urlPeople.data.gender;

    responseField.insertAdjacentHTML('beforeend',`
        <article class="article">
            <p class="name">Name: ${name}</p>
            <p class="birth_year">Birth year: ${birth_year}</p>
            <p class="gender">Gender: ${gender}</p>
        </article>
    `);
}

const displayInfo = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild)
    }
    getInformation();
}

submit.addEventListener('click', displayInfo);

//--------------------getPlanets----------------------------------------------------
const getPlanets = async (nextPage = 1) => {
    const dataPlanets = await axios.get(`${urlPlanets}${nextPage}`);
    const endpointPlanets = dataPlanets.data.results;
    endpointPlanets.forEach((endpoint) => getPlanet(endpoint));
}
const getPlanet = async (endpoint) => {
    const namePlanet = endpoint.name;
    console.log(namePlanet);
    responseField.insertAdjacentHTML('beforeend',`
        <article class="article">
            <p class="namePlanet">Name planet: ${namePlanet}</p>
        </article>
    `);
}
const displayPlanets = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild)
    }
    getPlanets();
}
const displayNextPlanets = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild)
    }
    if (nextPagePlanets === 6) nextPagePlanets = 0;
    nextPagePlanets += 1;
    getPlanets(nextPagePlanets);

}

btn_getPlanets.addEventListener('click', displayPlanets);
btn_nextPlanets.addEventListener('click', displayNextPlanets);


