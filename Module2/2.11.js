const colors = ["white", "blue", "yellow", "black", "red", "green"];
const firstColor = [];
const secondColor = [];
const otherColors = []

for (let i = 0; i <= 1; i++) {
    firstColor.push(colors[i]);
    secondColor.push(colors[i]);
}

for (let i = 2; i <= colors.length; i++) {
    otherColors.push(colors[i]);
}

console.log(firstColor);
console.log(secondColor);
console.log(otherColors)