const arr = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];
let sum = 0;

const manipulateARR = arr.map(item => {
    if (item < 5) {
        console.log(item);
    };
});

const min = Math.min.apply(null, arr);
const max = Math.max.apply(null, arr);
console.log(min);
console.log(max);

const reverse = arr.reverse();
console.log(reverse);

const arithmetic = () => {
    if (arr.length === 0) {
        return 0;
    };

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };

    const n = sum / arr.length;

    arr.map(i => {
        if (arr[i] > n) {
            console.log(`Cel mai mare numar in comparatie cu ${n} este ${arr[i]}`);
        }
    });
}

arithmetic();