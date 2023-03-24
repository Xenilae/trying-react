// const age = 99;
// if (age < 19) {
//     console.log(`Young`); // SE PUTE DE FOLOSIT SI if (age < 14 || age > 90), DAR VARIANTA DE JOS II MAI CITABILA
// } else if (age > 19) {
//     console.log(`Old`);
// }

const age = prompt("Give me the age");

if (!(age >= 15 && age <= 90)) {
    alert("Kid");
} else {
    alert("Old")
};