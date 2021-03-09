
const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
const student = students[0];
// 1.
function getSubjects(student) {
    return Object.keys(student.subjects)
            .map(word => word[0].toUpperCase() + word.slice(1).replace('_',' '))
            .join(", ").split(',');
}
console.log(getSubjects(student));

// 2.
function getAverage(numbers){
    const newArray = numbers.filter(number => Number.isInteger(number));
    return Number(newArray.reduce((accumulator,number) => accumulator + number / newArray.length,0).toFixed(2));
}
function getAverageMark(student) {
    return getAverage(Object.values(student.subjects)
                 .reduce((a, b) => a.concat(b)));
}
console.log(getAverageMark(student));

// 3.
function getStudentInfo(student) {
    const newObjStudent = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    };
    return `${JSON.stringify(newObjStudent)}`;
}
console.log(getStudentInfo(student));

// 4.
function getStudentsNames(students) {
    return students.map((student, index) => students[index].name).sort();
}
console.log(getStudentsNames(students));

// 5.
function getBestStudent(students) {
    let newObjStudent = [];
    students.map((student, index) => {
        newObjStudent.push({
            name: students[index].name,
            averageMark: getAverageMark(students[index])
        });
    });
    let maxAverageMark = newObjStudent[0].averageMark;
    let indexMax = 0;
    for (let i = 0; i < newObjStudent.length; i++){
        if(maxAverageMark < newObjStudent[i].averageMark) {
            maxAverageMark = newObjStudent[i].averageMark;
            indexMax = i;
        }
    }
    return newObjStudent[indexMax].name;
}
console.log(getBestStudent(students));

// 6.
function calculateWordLetters(word) {
    const arrayWord = word.split('');
    function callback(allLetters, letter) {
        if (letter in allLetters) {
            allLetters[letter] ++;
        } else {
            allLetters[letter] = 1;
        }
        return allLetters;
    }
    return arrayWord.reduce(callback,{});
}
const word = "тест";
console.log(calculateWordLetters(word));

