const ruWeekDays = {
    mo: "Понедельник",
    tu: "Вторник",
    we: "Среда",
    th: "Четверг",
    fr: "Пятница",
    sa: "Суббота",
    su: "Воскресенье",
};

const roWeekDays = {
    mo: "Luni",
    tu: "Marti",
    we: "Miercuri",
    th: "Joi",
    fr: "Vineri",
    sa: "Simbata",
    su: "Duminica",
};


const translatedWeekDays = {};

for (const item in ruWeekDays) {
    translatedWeekDays[item] = roWeekDays[item];
}

console.log(translatedWeekDays);