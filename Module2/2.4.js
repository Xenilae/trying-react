const sumInput = () => {
    const numbers = [];
    let sum = 0;

    while (true) {
        const value = prompt("Introduceti un numar", 0);
        if (value === "" || value === null || !isFinite(value)) {
            break;
        };

        numbers.push(+value);
    }

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}
alert(sumInput());