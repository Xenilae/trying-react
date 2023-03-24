const numbers = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: null, y: 4 }, { x: 3, y: undefined }];

// let filteredNumbers = [];
// const filter = () => {
//     for (let i = 0; i < numbers.length; i++) {
//         if (typeof numbers[i] == "number") {
//             filteredNumbers.push(numbers[i]);
//         }
//     }
// }
// filter();
// console.log(filteredNumbers);

const filterArr = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].x != null && array[i].y != undefined) {
            result.push(array[i]);
        }
    }
    console.log(result);
}

filterArr(numbers);