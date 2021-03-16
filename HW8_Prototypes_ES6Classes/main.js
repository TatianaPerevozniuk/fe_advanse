// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.
// 1. У стдентів повинні бути наступні властивості: university, course, fullName,
//     вони передаються при створенні студента(в конструктор).


// 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер",
//     метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.

// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена,
//     геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]

// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
    }
    get getInfo() {
        return `${this.course}th year student of the ${this.university}, ${this.fullName}.`;
    }
    get getMarks() {
        return this.marks;
    }
    set setMarks(mark) {
        this.marks.push(mark);
    }
    static getAverageMark(marks) {
        return Number((marks.reduce((a, b) => (a + b)) / marks.length).toFixed(2));
    }
}

const tania = new Student('Kiev Polytechnic Institute', 5,'Perevozniuk Tatiana Igorevna');
console.log(tania);
const infoTania = tania.getInfo;
console.log(infoTania);
tania.setMarks = 5;
tania.setMarks = 4;
tania.setMarks = 4;
tania.setMarks = 5;
tania.setMarks = 5;
const marksTania = tania.getMarks;
console.log(marksTania);
const averageMarkTania = Student.getAverageMark(tania.marks);
console.log(averageMarkTania);

// 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки
// та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
//
// 7. Створіть метод this.recover, який дозволить поновити студента
//
// Advanced
//
// 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// 2. Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship.
//     Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту.
//    Підказка: викликайте його в constructor
// 4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// 5. Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )


// const Student = function (name, finished) {
//     this.name = name;
//     this.finished = finished;
// }
// const vladislav = new Student('Vladislav', 5);
// const oleg = new Student('Oleg', 4);
// console.log(vladislav.name === oleg.name);

// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//     set setName(name){
//         this.name = name;
//     }
// }
// const vladislav = new Student('Vladislav', 5);
// vladislav.setName ='Klia';
// console.log(vladislav);