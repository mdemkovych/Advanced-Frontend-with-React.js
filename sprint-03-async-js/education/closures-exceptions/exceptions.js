/* EXCEPTIONS */

try{
    // code run
} catch(error) {
    // handle error
} finally {
    // always run
}

try {
    console.log("Try block start");
    // ... Code without error
    console.log("Try block end");
} catch (error) {
    console.log("Error has occurred");
} finally {
    console.log("Finally block");
}

// Syntax Error is more priority than Exceptions

try {
    getUser()
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);
}

// throw <object error>

function enterPIN() {
    const pin = prompt('Enter PIN');
    if (pin === '1234') {
        return pin;
    } else {
        throw new Error('Invalid PIN');
    }
}

try {
    const pin = enterPIN();
    console.log(pin);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}