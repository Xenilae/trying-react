const lim = 10;
let sum = 0;

for (let i = 1; i <= lim; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
    console.log(sum)
}
console.log(`Suma numerelor pare de la  0 - ${lim} este: \n ${sum}`);