const user = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: `email@domain.com`
    },
    address: `Moldova`,

    get userName() {
        return this.name;
    },

    set userName(value) {
        this.name = value;
    },

    get userSalary() {
        return this.salary;
    },

    set userSalary(value) {
        this.salary = value;
    }
};
user.userName = "Igor";
user.userSalary = 0;

console.log(user.name);
console.log(user.salary);