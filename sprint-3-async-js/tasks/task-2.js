/* Write an add(x, y) function that takes two arguments x and y. The function should return a Promise that
resolves with the sum of the two arguments if they are Numbers, or rejects with the message "Error!" otherwise. */

{
    function add(x, y) {
        return new Promise((resolve, reject) => {
            if (typeof x === 'number' && typeof y === 'number') {
                resolve(x + y);
            } else {
                reject("Error!");
            }
        });
    }

    add(2, 2).then(res => console.log(res));
    const end1 = Date.now() + 1000;
    while (Date.now() < end1) {
        const muchCompute = 1 + 2 + 3;
    }

    add(2, "a").catch(err => console.log(err));
    const end2 = Date.now() + 1000;
    while (Date.now() < end2) {
        const muchCompute = 1 + 2 + 3;
    }

    add("b", "a").catch(err => console.log(err));
    const end3 = Date.now() + 1000;
    while (Date.now() < end3) {
        const muchCompute = 1 + 2 + 3;
    }
}