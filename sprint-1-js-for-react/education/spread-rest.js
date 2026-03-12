/* Spread operator & Rest operator */

/* SPREAD - "expands" values */
// add elements from existing arr to new arr
const additionalSubject = ['Philosophy', 'Psychology'];
const subjects = ['Math', 'Physics', ...additionalSubject];
console.log(subjects);

// copy arr
const number1 = [1, 2, 3, 4, 5];
const number2 = [...number1];
number2.push(10);
console.log(number1);
console.log(number2);

// concat arr
const number3 = [1, 2, 3];
const number4 = [4, 5, 6];
const number5 = number3.concat(number4);
const number6 = [...number3, 20, ...number4];
console.log(number5);
console.log(number6);

// passing array elements to a function
function perimeter(a, b, c) {
    return a + b + c;
}

const sides = [10, 20, 30];
console.log(perimeter(...sides));


/* REST - "collects" values */
function addExclamation(...arr) {
    return arr.map(el => el + '!');
}

console.log(addExclamation(1, 3, 'Hello', 'World'));