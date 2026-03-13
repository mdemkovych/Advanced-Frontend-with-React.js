# Sprint 2 - Object-oriented design (OOD) / Object-oriented programming (OOP)

## Overview
This sprint focuses on understanding object-oriented concepts in JavaScript.  
The goal is to learn how to design objects, use constructors, classes, prototype inheritance, and manage `this` with call, apply, and bind.

---

# Learning Materials

### Object-oriented Design (OOD)

- Principles of OOD
    - **Encapsulation** – private fields, getters, and setters
    - **Inheritance** – reuse logic via prototypes or `extends`
    - **Polymorphism** – methods with same name, different behavior
    - **Abstraction** – is closely related to encapsulation, but while encapsulation is about restricting access, abstraction is about simplifying and showing only necessary information.
- Understanding **classes vs constructor functions**
- **Prototype chain** and memory efficiency

---

### Object-oriented Programming (OOP) in JS

#### Constructors and Prototype

- **Function Constructors**
- **Instance properties vs prototype methods**
- Overriding prototype methods on instances
- Using `Object.create()` for inheritance
- Accessing `arguments` and `this` inside functions

#### Classes (ES6+)

- **Class syntax as sugar over prototype**
- **Constructor** for instance properties
- **Methods** vs **static methods**
- **Getters and Setters**
- **Private fields** (`#field`)
- **Extends** for inheritance
- **Super** for calling parent constructor

---

### Call, Apply, Bind

- **call(this, arg1, arg2, …)** – invoke function with a specific `this`
- **apply(this, [args])** – invoke function with `this` and arguments array
- **bind(this, arg1, …)** – returns a new function with bound `this` and optional preset arguments
- Using call/apply/bind to control **context (`this`)** and arguments