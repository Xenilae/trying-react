const userName = prompt("Username", "");
const passWord = prompt("Password", "");

if (userName == "" || passWord == "") {
    alert('Incorect try again');
} else if (userName === passWord) {
    alert('Hello');
} else if (userName != passWord) {
    alert('Incorect something');
}