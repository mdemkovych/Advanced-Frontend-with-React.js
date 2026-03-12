/* DESTRUCTURING */

// 1. OBJECT
const person = {
    age: 25,
    isMarried: true
};

console.log(person); // { age: 25, isMarried: true }

// we can change params, for ex. age: number, isMarries: hasPartner
const { age, isMarried } = person;
console.log(age, isMarried); // 25 true

// clear assignment
const userAge = person.age;
const userIsMarried = person.isMarried;


// 2.ARRAY
const numbers = [1, 2, 3];
const [a, b, c, d = "default"] = numbers;
console.log(a, b, c, d); // 1 2 3 default

// skipping elements
const [x, , z] = numbers;
console.log(x, z); // 1 3

numbers.push(4)

// ... - rest
const [first, ...last] = numbers;
console.log(first, last); // 1 [ 2, 3, 4 ]


// 3.exchange of variables with values
let n1 = 1;
let n2 = 2;
[n1, n2] = [n2, n1];
console.log(n1, n2); // 2 1


// 4.function parameters
const student = {
    fullName: {
        firstName: "John",
        lastName: "Doe"
    },
    direction: "Programing",
    nickname: "Johnny"
};

function studentDirection({direction}) {
    return direction;
}

console.log(studentDirection(student)); // programing

// fullName:{firstName, lastName}
function whois({nickname, fullName:{firstName, lastName: surname}}) {
    return `${firstName} ${surname} is known as ${nickname}`;
}

console.log(whois(student)); // John Doe is known as Johnny