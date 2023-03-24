const name = prompt('What is your name', 'Igor');
alert(`Hello ${name} !`);
const user = confirm(`Do ${name} know js?`);

if (user == true) {
    alert('Good job!');
} else {
    alert('You can start your studies right now!');
}