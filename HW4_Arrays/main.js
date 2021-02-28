// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з
// парами студентів: [["Олександр", "Олена"], [..], [...]];
// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти
// вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна
// мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairsOfStudents (students){
    let male =[];
    let female =[];
    for(let i = 0; i<students.length; i++){
        if (students[i].slice(-1) === "а"){
            female.push(students[i]);
        }
        else male.push(students[i]);
    }
    let pairs =[];
    for(let i = 0; i<students.length/2; i++){
        pairs.push([male[i],female[i]]);
    }
    return pairs;
}
const pairs = getPairsOfStudents(students);
console.log(pairs);

function getThemes(pairs,themes) {
    let getThemes = [];
    for(let i = 0; i < pairs.length; i++){
        getThemes.push([pairs[i].join(" і "),themes[i]]);
    }
    return getThemes;
}
const pairsThemes = getThemes(pairs,themes);
console.log(pairsThemes);

function getMarks(students,marks){
    let marksStudents = [];
    for(let i = 0; i < students.length; i++){
        marksStudents.push([students[i],marks[i]]);
    }
    return marksStudents;
}
const marksStudents = getMarks(students,marks);
console.log(marksStudents);

function getRandomMarks(pairs,themes){
    let randomMarks = [];
    for(let i = 0; i < pairs.length; i++){
        randomMarks.push([pairs[i].join(" і "),themes[i],(Math.floor(Math.random() * 5) + 1)])
    }
    return randomMarks;
}
const randomMarksPairsStudents = getRandomMarks(pairs,themes);
console.log(randomMarksPairsStudents);