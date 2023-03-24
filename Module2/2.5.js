const map = (fn, arr) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(square(arr[i]));
    }

    return newArr;
}

const square = (x) => {
    return x * x;
};
console.log(map(square, [1, 2, 3, 4])); //1,4,9,16