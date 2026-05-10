# Sprint 5 - React: Keys, State, Props, Events

## Overview
This sprint focuses on the core React concepts required for building interactive and reusable user interfaces.  
The goal is to understand how to work with **keys** in lists, manage component **state**, pass data with **props**, handle user **events**, and get introduced to **React Hooks** as a modern way to manage state and component logic.

---

# Learning Materials

### React Hooks

1. Introduction to **React Hooks**.
2. Why Hooks were added to React.
3. Understanding how Hooks simplify state and lifecycle logic in functional components.
4. Basic rules of Hooks:
    - Only call Hooks at the top level
    - Only call Hooks inside React functions
5. Overview of common Hooks:
    - `useState`
    - `useEffect` (basic introduction)

---

### React Keys

- Understanding why **keys** are used in React lists
- Rendering multiple elements with `.map()`
- Using a unique `key` prop for each list item
- Why keys help React identify changed elements
- Avoiding incorrect use of array indexes as keys
- Improving rendering performance and stability in lists

---

### React State

- Understanding **state** in React components
- Difference between **state** and regular variables
- Managing local component data with `useState`
- Updating state and triggering re-renders
- Using `useState` with:
    - primitive values
    - objects
    - arrays
- Functional state updates
- State-driven UI rendering

---

### React Props

- Understanding **props** in React
- Passing data from parent to child components
- Making components reusable with props
- Reading props inside a component
- Using props for dynamic content rendering
- Difference between **props** and **state**

---

### React Events

- Handling **user events** in React
- Common React events:
    - `onClick`
    - `onChange`
    - `onSubmit`
- Writing event handler functions
- Passing functions as event handlers
- Working with the **event object**
- Updating state in response to user interactions