/* CLOSURES */

// Copy the incoming boxes array so the original stays intact
function prepare(boxes) {
    const boxStorage = [...boxes]; // upper memory storage
    return (function pack(item) { // inner
        console.log(boxStorage);
        return boxStorage.pop() + item + ', boxes left ' + boxStorage.length; // closure in memory value boxStorage
    })
}

const packChoco = prepare(Array.from('🎁🎁🎁🎁🎁🎁🎁'));
const packCandy = prepare(Array.from('🎁🎁🎁🎁🎁🎁🎁'));

// Now pack three items, one per call:
console.log(packChoco('🍷')); // e.g. "🎁🍷
console.log(packCandy('🍖')); // e.g. "🎁🍖
console.log(packCandy('🍭')); // e.g. "🎁🍭