const user1 = {
    name: 'User1',
    age: 123,
};

const user2 = {
    ...user1 //METODA SPREAD 
};

const changeData = () => {
    user2.name = 'User2';
    user2.age = 321;
};

changeData();
console.log(user1);
console.log(user2);