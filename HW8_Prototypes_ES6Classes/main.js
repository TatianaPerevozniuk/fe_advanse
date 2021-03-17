
class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
        this.dismissed = false;
        this.dismiss = function () {
            this.dismissed = true;
        };
        this.recover = function (){
            this.dismissed = false;
            this.marks = [];
        };
    }
    get getInfo() {
        return `${this.course}th year student of the ${this.university}, ${this.fullName}.`;
    }
    get getMarks() {
        return this.dismissed? this.marks = null : this.marks;
    }
    set setMarks(mark) {
        !this.dismissed ? this.marks.push(mark): this.marks = null;
    }
    static getAverageMark(marks) {
        return marks !== null?Number((marks.reduce((sum, mark) => (sum + mark)) / marks.length).toFixed(2)):null;
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
const averageMarkTania = Student.getAverageMark(tania.marks);
console.log('Marks: ',marksTania,'; Average Mark: ',averageMarkTania);

tania.dismiss();
tania.setMarks = 5;
console.log('Student dismissed. Marks: ',tania.getMarks,'; Average Mark: ',Student.getAverageMark(tania.marks));

tania.recover();
tania.setMarks = 5;
tania.setMarks = 4;
tania.setMarks = 5;
console.log('Student recovered. Marks: ',tania.getMarks,'; Average Mark: ',Student.getAverageMark(tania.marks));


// Advanced
//
// 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// 2. Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship.
//     Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту.
//    Підказка: викликайте його в constructor
// 4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// 5. Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )
