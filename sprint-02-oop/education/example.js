/* Example */

const user = {
    name: "Maksym",
    age: 21,
}

const user2 = {
    name: "Maks",
    age: 22,
}

console.log(user);

function person(user) {
    return user.name + user.age
}

console.log(person(user));

function person2({age}) {
    return age
}

console.log(person2(user));

function desPerson({age: usrAge, name}) {
    return name + usrAge;
}

console.log(desPerson(user));

function printInfo() {
    console.log("------")
    console.log(arguments);
    console.log(this);
    return this.name + this.age;
}

console.log(printInfo.call({name: "Maksym", age: 21}));
console.log(printInfo(user2))