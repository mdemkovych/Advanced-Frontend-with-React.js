/* TEMPLATE LITERALS */

// multi row
console.log('string text line 1\n' +
    'string text line 2');

console.log(`string text line 1
string text line 2`);


// interpolation - ${}
const a = 5;
const b = 10;

console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
console.log(`Fifteen is ${(a + b)} and\nnot ${(2 * a + b)}.`);


// templates with attachment
function isOnline() {
    return true;
}

const isAdmin = true;

// ternary operator - (condition ? expr1 : expr2)
let greet1 = 'Welcome ';
greet1 += (isOnline() ?
    'you are online ' + (isAdmin ? '(admin)' : '(user)')
    : 'you are offline') + '.';

console.log(greet1);

// Template Literals example - ${}
let greet2 = `Welcome ${(isOnline() ?
    `you are online ${(isAdmin ? '(admin)' : '(user)')}`
    : `you are offline`)}.`;

console.log(greet2);


// Tagged literals
let person = 'Maks';
let age = 21;

function myTag(strings, personExp, ageExp) {
    let str0 = strings[0]; // Hello, my name is
    let str1 = strings[1]; // and I am
    let str2 = strings[2]; // years old.

    const ageStr = () => {
        if (age >= 18) {
            return 'adult'
        } else {
            return 'child'
        }
    }

    // return str0 + personExp + str1 + ageStr() + '! ' + 'I am ' + ageExp + ' years old.';
    return str0 + personExp + str1 + ageStr() + '! ' + `I am ${ageExp} years old.`;
}

// equal to - myTag(["Hello, my name is ", " and I am ", " years old."], person, age);
let output = myTag`Hello, my name is ${person} and I am ${age} years old.`;

console.log(`Hello, my name is ${person} and I am ${age} years old.`);
console.log(output);