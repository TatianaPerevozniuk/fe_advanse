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
console.log(getPairsOfStudents(students));