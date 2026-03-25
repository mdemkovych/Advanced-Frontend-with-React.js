const worker = new Worker('worker.js');

worker.onmessage = data => {
    console.log('Worker sent: ', data);
}

worker.postMessage({type: 'command'});


alert("UI is available");
/* UI is blocked for 9000 ms */
// let count = 0;
// const now = performance.now();
// for (let i = 0; i < 3000000000; i++) {count++}
//
// console.log(`Count: ${count} Time: ${performance.now() - now} ms`);
// alert("UI is available");