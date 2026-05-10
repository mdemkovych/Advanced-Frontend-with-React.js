/* PROMISES */

// fetch() and json() - повертає браузерний Promise

const p = new Promise((resolve, reject) => {
    if (Math.random() < 0.1) resolve('🎉 success');
    else reject(new Error('💥 fail'));
});

p.then(val => {
    console.log(val);
    return val + '!!!';
})
    .then(val2 => console.log(val2))
    .catch(err => console.error(err.message + ' ' + err.name))
    .then(() => console.log('recovered from the error!'));


// Quick settled promises
// Promise.resolve(42).then(console.log);
// Promise.reject('err').catch(console.error);


// Thenable as Promises
function thenable(value) {
    return {
        then: function(callback) {
            callback(value);
        }
    }
}

const thenablePromise = thenable("Thenable")

thenablePromise.then(value => console.log(value));

Promise.resolve(thenablePromise).then(console.log); // Promise resolve thenables


function doSomething(value) {
    return new Promise((resolve) => {
        resolve(value);
    });
}

doSomething(0)
    .then(res => console.log(res))                     // no handler: result (0) just passes through
    .then(res => [res])         // wrap in an array          → [0]
    .then(res => res.concat(1)) // add 1                     → [0,1]
    .then(res => res.concat(2)) // add 2                     → [0,1,2]
    .then(res => res.concat(3)) // add 3                     → [0,1,2,3]
    .then(res => console.log(res))  // logs: [0,1,2,3]
    .then(res => console.log(res)); // logs: undefined

function doSomething2(value) {
    return new Promise((resolve) => {
        resolve(value);
    });
}

doSomething2(1)
    .then(value => {
        console.log(value);       // logs: 1
        return doSomething2(2);    // return a new Promise
    })
    .then(value => {
        console.log(value);       // logs: 2
        return doSomething2(3);    // return another Promise
    });

// Promise all race
function fetchMock(name, delay) {
    return new Promise(resolve => setTimeout(() => resolve(name), delay));
}

const p1 = fetchMock('A', 1000);
const p2 = fetchMock('B', 500);

// Promise.allSettled
Promise.all([p1, p2]).then(([r1, r2]) => {
    console.log('All:', r1, r2);
});

Promise.race([p1, p2]).then(first => {
    console.log('First:', first);
});