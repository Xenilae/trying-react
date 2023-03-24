const weekDaysReverse = {
    Luni: 'Mo',
    Marti: "Tu",
    Miercuri: "We",
    Joi: "Th",
    Vineri: "Fr",
    Simbata: "Sa",
    Duminica: "Su",
};

const weekDaysCorect = {}

for (const item in weekDaysReverse) {
    weekDaysCorect[weekDaysReverse[item]] = item;
}

console.log(weekDaysCorect);