# Sprint 3 - Asynchronous JS, Closures, Exceptions

## Overview
This sprint focuses on understanding asynchronous JavaScript, closures, generators, and exception handling.  
The goal is to learn how JavaScript handles delayed operations, works with callbacks, Promises, async/await, and manages execution flow and errors.

---

# Learning Materials

### Asynchronous JavaScript

1. Understanding **synchronous vs asynchronous code**.  
2. JavaScript is **single-threaded**.  
3. How asynchronous tasks are handled outside the **Call Stack**.  
4. Role of **Web APIs / Browser APIs** (or Node.js runtime).  
5. Introduction to **non-blocking behavior**.

---

### Event Loop, Events & Callbacks

- **Call Stack** – where synchronous code executes
- **Web APIs** – where timers and browser events are handled
- **Callback Queue / Task Queue (Macrotask Queue)** – where callbacks wait
- **Event Loop** – moves callbacks into the Call Stack when it is empty
- **Event callbacks** – functions executed in response to actions or events
- `setTimeout()` as a **browser/runtime API**, not part of pure JavaScript

---

### Promise

- **Promise states**
    - `pending`
    - `fulfilled`
    - `rejected`
- Creating Promises with `new Promise()`
- `.then()` for successful results
- `.catch()` for errors
- `.finally()` for cleanup logic
- Replacing callback-based async flow with Promises

---

### Working with Promise

- **Promise chaining**
- Returning values from `.then()`
- Returning another Promise from `.then()`
- Error propagation through the chain
- Avoiding **callback hell**
- Cleaner async flow management

---

### Async / Await

- `async` functions always return a **Promise**
- `await` pauses execution inside an async function
- Writing asynchronous code in a more **synchronous style**
- Using `try...catch` with async operations
- Comparing `async/await` vs `.then()`

---

### Generators

- **Generator functions** using `function*`
- `yield` to pause execution
- `next()` to resume execution
- Generator object behavior
- Controlled step-by-step execution
- Lazy evaluation basics

---

### Exceptions

- Understanding **runtime errors**
- `try...catch` for handling errors
- `finally` for code that always runs
- `throw` for creating custom errors
- Using custom error messages
- Error handling in synchronous and async code

---

### Closures

- **Lexical scope** and outer function variables
- Inner functions remember variables from outer scope
- Closure keeps access even after outer function finishes
- Data privacy with closures
- Common real-world use cases:
    - counters
    - factory functions
    - private state