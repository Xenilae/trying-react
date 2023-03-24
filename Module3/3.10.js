const user = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: 123,
        email: "email@domain.com"
    },
    address: "Moldova",
};

const user2 = {
    name: "Person2",
    age: 123,
    salary: 154212312.33,
    contacts: {
        phone: 123,
        email: "email@domain.com"
    },
    address: "Moldova",
};

const intersection = (obj1, obj2) => {
    const obj = {};

    for (const item in obj1) {
        if (typeof obj1[item] !== "object") {
            if (obj1[item] === obj2[item]) {
                obj[item] = obj1[item];
            }
        } else {
            if (compareObjects(obj1[item], obj2[item])) {
                obj[item] = obj1[item]
            }
        }
    }
    return obj;
};

const compareObjects = (obj1, obj2) => {
    let isEqual = true;

    for (const item in obj1) {
        if (obj1[item] !== obj2[item]) {
            isEqual = false;
            break
        }
    }
}

console.log(intersection(user, user2));