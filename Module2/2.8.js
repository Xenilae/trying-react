const colors = ["red", "green", "blue"];

const checkColor = (arr) => {
    arr.map(item => {
        if (arr.indexOf(item) !== -1) {
            console.log(arr.indexOf(item));
        } else {
            console.log("that's not a color!")
        }
    });
}

checkColor(colors);