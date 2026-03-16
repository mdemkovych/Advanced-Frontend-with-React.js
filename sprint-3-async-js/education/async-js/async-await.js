/* Async Await */

async function loadData() {
    try {
        console.log('Loading data...');
        const res  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Loaded data');
        const json = await res.json();
        console.log(json);
    } catch (err) {
        console.error(err);
    }
}

console.log(loadData());
console.log('Some other code');
console.log('Other code');