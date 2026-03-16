/* Implement the take() function that converts a sequence of iterated values into a sequence of length n. */

{
    function* take(n, iterable) {
        let count = 0;
        for (const item of iterable) {
            if (count++ >= n) break;
            yield item;
        }
    }

    const arr1 = ['a', 'b', 'c', 'd'];
    for (const x of take(2, arr1)) {
        console.log(x);
    }

    const arr2 = ['a', 'b', 'c', 'd'];
    for (const x of take(3, arr2)) {
        console.log(x);
    }
}