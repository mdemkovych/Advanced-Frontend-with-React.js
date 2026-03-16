/* Implement the getPromise(delay, message) function, which takes an integer number delay (between 0 and 2000)
and string message and returns a Promise that waits for a specified amount of time (using delay argument)
and resolves with the message. */

{
    function getPromise(delay, message) {
        return new Promise((resolve, reject) => {
            if (typeof delay !== 'number' || delay < 0 || delay > 2000) {
                reject(new Error("Delay must be a number between 0 and 2000"));
            } else {
                setTimeout(() => {
                    resolve(message);
                }, delay);
            }
        });
    }


    getPromise(2000, "hello").then(function (data) {
        console.log(data);
    });
    const end1 = Date.now() + 3000;
    while (Date.now() < end1) {
        const muchCompute = 1 + 2 + 3;
    }

    getPromise(2000, "world").then(function (data) {
        console.log(data);
    });
    const end2 = Date.now() + 3000;
    while (Date.now() < end2) {
        const muchCompute = 1 + 2 + 3;
    }
}