document.body.style.background = "red";

setTimeout(() => document.body.style.background = 'green', 3000);

const changeColor = () => {
    document.body.style.backgroundColor = 'orange';
};

const ul = document.createElement('ol');
document.body.append(ul);
let counter = 0;

const listOfNumbers = setInterval(() => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Element with number: ${counter}`))
    console.log(counter);

    if (counter % 2 === 0) {
        li.style.backgroundColor = "purple";
    } else {
        li.style.backgroundColor = "green"
    };

    ul.append(li);

    if (counter === 19) {
        clearInterval(listOfNumbers);
    }

    counter++;
}, 2000);