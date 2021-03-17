class Student {
    constructor(university, course, fullName, marks = []) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismissed = false;
        this.dismiss = function () {
            this.dismissed = true;
        };
        this.recover = function () {
            this.dismissed = false;
            this.marks = marks;
        };
    }

    get getInfo() {
        return `${this.course}th year student of the ${this.university}, ${this.fullName}.`;
    }

    get getMarks() {
        return this.dismissed ? this.marks = null : this.marks;
    }

    set setMarks(mark) {
        !this.dismissed ? this.marks.push(mark) : this.marks = null;
    }

    static getAverageMark(marks) {
        return marks !== null ? Number((marks.reduce((sum, mark) => (sum + mark)) / marks.length).toFixed(2)) : null;
    }
}
const dasha = new Student('Kiev Polytechnic Institute', 1, 'Perevozniuk Daria Igorevna', [5,3,4,5]);
console.log(dasha);

const tania = new Student('Kiev Polytechnic Institute', 5, 'Perevozniuk Tatiana Igorevna');
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
console.log('Marks: ', marksTania, '; Average Mark: ', averageMarkTania);

tania.dismiss();
tania.setMarks = 5;
console.log('Student dismissed. Marks: ', tania.getMarks, '; Average Mark: ', Student.getAverageMark(tania.marks));

tania.recover();
console.log('Student recovered. Marks: ', tania.getMarks, '; Average Mark: ', Student.getAverageMark(tania.marks));

console.log(tania);

// Advanced
class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => this.getScholarship,30000)
    }

    get getScholarship() {
        if (this.dismissed) console.log(`${this.fullName} -> Student dismissed.`);
        else if (this.marks.length === 0) console.log(`${this.fullName} -> No marks.You do not receive a scholarship.`);
        else if (Student.getAverageMark(this.marks) >= 4 && !this.dismissed) {
            console.log(`${this.fullName} -> You received 1400uah scholarships.`);
        }
        else {
            console.log(`${this.fullName} -> You do not receive a scholarship.Your average mark is ${Student.getAverageMark(this.marks)} < 4.`);
        }
    }
}

const anna = new BudgetStudent('KPI', 5, 'Anna');
anna.dismiss();
console.log(anna);

const vlad = new BudgetStudent('KPI', 2, 'Vladislav');
console.log(vlad);

const mary = new BudgetStudent('KPI', 3, 'Mary');
mary.setMarks = 5;
mary.setMarks = 5;
mary.setMarks = 3;
console.log(mary);

const den = new BudgetStudent('KPI', 4, 'Den');
den.setMarks = 5;
den.setMarks = 3;
den.setMarks = 3;
console.log(den);



