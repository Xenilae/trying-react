const students = [{
        name: "First",
        marks: [8, 10, 9, 5, 4]

    }, {
        name: "Second",
        marks: [8, 2, 2, 2, 2]

    },
    {
        name: "Third",
        marks: [6, 10, 7, 5, 4]

    },
    {
        name: "Fourth",
        marks: [8, 10, 4, 5, 4]

    },
    {
        name: "Fifth",
        marks: [8, 10, 7, 5, 4]

    },
];

const calculateAverage = (obj) => {
    obj.forEach(obj => {
        obj.average = obj.marks.reduce((sum, curent) => sum + curent, 0) / obj.marks.length;
        console.log(obj.name + ": " + obj.average);
    });
};

calculateAverage(students);

console.log("\n");
console.log("Students with mark less than 5");
console.log("\n");

const studentsInfo = (obj) => {
    obj.forEach(obj => {
        if (obj.average < 5) {
            console.log("One of the worst student is: " + obj.name);
            console.log("His marks are: " + obj.marks);
            console.log("His average mark is: " + obj.average);
        }
    });
}

studentsInfo(students);

console.log("\n");
console.log("Max and Min");
console.log("\n");

const minAndMax = () => {
    const arrayOfAverages = students.map(object => object.average)
    const maxAverage = Math.max(...arrayOfAverages)
    const minAverage = Math.min(...arrayOfAverages)

    console.log("Max average: " + maxAverage)
    console.log("Min average: " + minAverage)
};

minAndMax();

const sortingStudents = () => {
    sortedStudents = students.map(object => object);
    sortedStudents.sort((a, b) => {
        return b.average - a.average;
    });
}

sortingStudents();

students.forEach((e) => {
    console.log(`\n${e.name} \n ${e.marks} \n ${e.average}`);
});
console.log("\n");

const displayBestStudents = () => {

    const average = students.map(object => object.average).reduce((sum, curent) => sum + curent, 0) / students.length;

    const bestStudents = students.filter(student => student.average > average);
    bestStudents.forEach(student => {
        console.log(student.name);
        console.log(student.marks);
        console.log(student.average);
    });
}

displayBestStudents();