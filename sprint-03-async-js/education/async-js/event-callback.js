/* EVENTS and CALLBACKS */

// Event - example works inside index.html (where document exist)

// document.addEventListener('click', event => {
//     console.log('Clicked at', event.clientX, event.clientY);
// });

// Callback
function fetchData(callback) {
    setTimeout(() => callback('✅ data loaded'), 1000);
}

fetchData(result => console.log(result)); // (result) => console.log(result) )('✅ data loaded')

// Callback hell example
function step1(arg, callback) {
    setTimeout(() => callback(arg + 1), 500);
}
function step2(arg, callback) {
    setTimeout(() => callback(arg + 2), 500);
}
function step3(arg, callback) {
    setTimeout(() => callback(arg + 3), 500);
}

step1(0, res1 => {
    step2(res1, res2 => {
        step3(res2, res3 => {
            console.log('Result:', res3);
        });
    });
});