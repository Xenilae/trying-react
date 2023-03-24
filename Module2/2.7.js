const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const exctract = (first, second) => {
    return numbers.slice(first, second);
};

console.log(exctract(2, 4));