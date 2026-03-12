/* FUNCTIONS */

// 1.Function Declaration
function greeting(name) {
    return `Hello, ${name}!`;
}

// Usage
console.log(greeting('John')); // "Hello, John!"

// Function with multiple parameter, default params
function calculate(a = 10, b, operation = 'add') {
    console.log(arguments); // arguments - build in a pseudo-array
    switch(operation) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        default: return 0;
    }
}
console.log(calculate(undefined, 10));

// Pure function
function pureFunction(a, b) {
    return a + b;
}

console.log(pureFunction(1, 2));
console.log(pureFunction(1, 2));


// 2.Function Expression
// Anonymous Function Expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Named Function Expression
const calculator = function calc(a, b) {
    return a + b;
};
console.log(calculator(1, 2));

// Arrow Function Expression
const multiply = (a, b) => a * b;

// Function Expression with default parameters
const divide = function(a, b = 1) {
    return a / b;
};
console.log(divide(10, 2));

// Usage
console.log(greet('Jane')); // "Hello, Jane!"
console.log(multiply(5, 3)); // 15


// 3.Arrow function
// Arrow functions doesn't have object {this} and function {arguments}.
// They inherit this from the context in which they were created.
// This is convenient in callbacks, but not suitable for object methods.

const arrowFunction = (a, b) => a + b;
console.log(arrowFunction(1, 2));

const arrowGreet = name => `Привіт, ${name}!`;
console.log(arrowGreet('John'));

var obj = {
    i:10,
    b: () => {
        try {
            console.log(this.i, this);
        } catch (error) {
            console.error('Помилка в методі b:', error.message);
        }

    },
    c: function() {
        console.log(this.i, this);
    }
};

obj.b();
obj.c();

// arrow function can return obj
// let arrF = a => ({value: 100 + a});


// 4.IIFE (Immediately Invoked Function Expression)
// Basic IIFE
(function() {
    console.log('This runs immediately!');
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})('John');

// IIFE with a default parameter
(value = function(val = 10) {
    console.log(`Number is ${val}`);
})();

value(5); // value has a function
console.log(value()); // Number is 10 && undefined

// IIFE with arrow function
(() => {
    console.log('Arrow function IIFE');
})();

// IIFE that returns a value
const result = (function() {
    const a = 5;
    const b = 3;
    return a + b;
})();

console.log(result); // can be called a second time

// IIFE with private scope
const counter = (function() {
    let count = 0; // Private variable

    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
})();

// usage
console.log(counter.getValue()); // 0
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.count); // undefined (private!)


// 5.Overloading Function in JS
/*function doSomething(a, b) { // not active when overloading
    return [a, b]; // [1, 2] without overloading
}*/

function doSomething({a, b}) { // active
    return [a, b];
}

console.log(doSomething(1, 2));
console.log(doSomething({a: 1, b: 2}));

function overDoSomething(a, b) {
    if (typeof a === 'object') { // === - strict equality
        return [a.a, a.b];
    }
    else {
        return [a, b];
    }
}

console.log(overDoSomething(1, 2));
console.log(overDoSomething({a: 1, b: 2}));


// 6.Function Composition
// ramda - library for working with functions
// import { compose, pipe } from 'ramda';
function a(value) {
    value += 'a';
    return value;
}

function b(value) {
    value += 'b';
    return value;
}

function c(value) {
    value += 'c';
    return value;
}
console.log(a('_'));
console.log(b(a('_')));
console.log(c(b(a('_'))));

// const compVal1 = compose(a, b, c);
// console.log(compVal1('_'));
//
// const compVal2 = compose(c, b, a)('_');
// console.log(compVal2);
//
// // // compose - Combines functions from right to left (←)
// // compose(console.log, c, b, a)('_');
// //
// // // pipe - Combines functions from left to right (→)
// // pipe(a, b, c, console.log)('_');