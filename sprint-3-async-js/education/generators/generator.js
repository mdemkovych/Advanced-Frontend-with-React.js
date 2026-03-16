/* GENERATOR */

function* generatorFunction() {
    return "Hello, Generator!"
}

const generator = generatorFunction();
console.log(generator);
console.log(generator.next());

function* generatorFunction2() {
    yield "Hello"
    yield "World"
    yield 1
    yield 2
    return "Goodbye"
}

const generator2 = generatorFunction2();


// iterating over generator

const generatorValues = [...generator2] // generator2 - is already used and became empty
console.log(generatorValues);

for (const value of generator2) {  // nothing - generator2 is empty
    console.log(value);
}

for (const value of generatorValues) {
    console.log(value);
}

console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.return("Generator have been terminated!"));
console.log(generator2.next());

// Yield delegation
function* delegate() {
    yield 3
    yield 4
}

function* begin() {
    yield 1
    yield 2
    yield* delegate()
    yield 5
}

console.log([...begin()]);

// Infinite data stream
function* fibonacci() {
    let prev = 0
    let next = 1

    yield prev
    yield next

    while (true) {
        const newVal = next + prev

        yield newVal

        prev = next
        next = newVal
    }
}

const fib = fibonacci();

for (let i = 0; i < 10; i++) {
    console.log(fib.next().value)
}