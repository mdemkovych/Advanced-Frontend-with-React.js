# Sprint 9 - Node, AJAX

## Overview
This sprint introduces the basics of **Node.js**, the **Express** web framework, and **AJAX-style HTTP communication** in modern frontend applications.  
The goal is to understand how JavaScript can run on the server with Node.js, how to create simple backend APIs with Express, and how to send HTTP requests from the frontend using **Axios**.

---

# Learning Materials

## Node.js

- Introduction to **Node.js**
- What Node.js is and why it is used
- Difference between:
    - browser JavaScript
    - server-side JavaScript
- Understanding the **JavaScript runtime environment**
- How Node.js uses the **V8 engine**
- Running JavaScript files with Node
- Using the terminal to execute Node scripts
- Basic Node.js use cases:
    - backend development
    - scripts and automation
    - APIs
    - tools and build systems

---

## Express.js

- Introduction to **Express**
- Why Express is commonly used with Node.js
- Creating a basic server
- Handling routes with:
    - `GET`
    - `POST`
- Sending responses to the client
- Working with request and response objects:
    - `req`
    - `res`
- Basic API endpoint structure
- Middleware concept (basic introduction)
- Returning JSON from the server

---

## AJAX Concepts

- Introduction to **AJAX**
- What AJAX means in modern web development
- Difference between:
    - traditional page reloads
    - asynchronous HTTP requests
- Why AJAX improves user experience
- Common request types:
    - `GET`
    - `POST`
    - `PUT`
    - `DELETE`
- Understanding request / response flow
- Working with APIs asynchronously

---

## Axios

- Introduction to **Axios**
- Why Axios is used instead of raw `fetch()` in some projects
- Installing Axios in a project
- Sending HTTP requests with Axios:
    - `axios.get()`
    - `axios.post()`
    - `axios.put()`
    - `axios.delete()`
- Handling successful responses
- Handling errors with:
    - `.catch()`
    - `try/catch` with `async/await`
- Accessing response data via:
    - `response.data`
- Sending request headers and payloads
- Working with JSON APIs

---

## Axios with React

- Using Axios inside React components
- Fetching data when a component mounts
- Combining Axios with:
    - `useEffect`
    - `useState`
- Rendering fetched data in the UI
- Handling loading state
- Handling error state
- Updating component state with API responses
- Best practices for API calls in React apps

---

# Notes

- **Node.js** is the runtime that allows JavaScript to work outside the browser.
- **Express** simplifies backend development by providing routing and middleware tools.
- **AJAX** is a concept of sending requests asynchronously without reloading the page.
- **Axios** is a popular HTTP client often used in React projects for cleaner request handling.