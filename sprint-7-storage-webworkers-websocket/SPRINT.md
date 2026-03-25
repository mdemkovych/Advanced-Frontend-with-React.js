# Sprint 7 - Storage (Local/Session), Web Workers, WebSocket

## Overview
This sprint focuses on browser storage mechanisms, background processing, and real-time communication in web applications.  
The goal is to understand how to persist data using **Web Storage APIs**, improve performance with **Web Workers**, and build real-time features with **WebSockets**.

---

# Learning Materials

### Web Storage

- Introduction to **Web Storage API**
- Difference between:
    - `localStorage`
    - `sessionStorage`
    - `cookies`
- Storing and retrieving data in `localStorage`
- Storing and retrieving data in `sessionStorage`
- Removing specific items with `removeItem()`
- Clearing storage with `clear()`
- Converting objects with:
    - `JSON.stringify()`
    - `JSON.parse()`
- When to use:
    - local storage
    - session storage
    - cookies
- Storage limitations and browser behavior
- Security considerations when storing sensitive data

---

### Web Workers

- Introduction to **Web Workers**
- Why Web Workers are needed
- Main thread vs background thread
- Creating a worker with `new Worker()`
- Sending data to a worker with `postMessage()`
- Receiving data from a worker with `onmessage`
- Terminating workers with `terminate()`
- Offloading heavy computations from the UI thread
- Common use cases for Web Workers
- Limitations of Web Workers:
    - no direct DOM access
    - separate execution context

---

### WebSocket

- Introduction to **WebSocket**
- Difference between HTTP requests and WebSocket connections
- Creating a WebSocket connection
- WebSocket lifecycle events:
    - `onopen`
    - `onmessage`
    - `onerror`
    - `onclose`
- Sending data with `send()`
- Receiving real-time messages
- Closing a connection properly
- Common use cases for WebSockets:
    - chats
    - live notifications
    - real-time dashboards
    - multiplayer apps
- Handling connection errors and reconnection basics