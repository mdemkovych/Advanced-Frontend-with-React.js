/* OOP Encapsulation */

// Function-constructor-based Obj creating
function Employee(name, experience) {
    // Public instance properties (available for each object)
    this.name = name;
    this.experience = experience;

    // Private local variable (available only inside constructor via closure)
    // NOT accessible as emp.baseSalary
    let privateBaseSalary = 2000;

    // Public instance method
    // Each created object gets its own copy of this method
    // Useful when method needs access to private local variables via closure
    this.calculatePrivateSalary = function () {
        return privateBaseSalary * (1 + this.experience / 5);
    };
}

// Static property (shared for all objects)
// Belongs to constructor itself, not to created objects
Employee.baseSalary = 2000;

// Static method
Employee.calculateSalary = function(experience) {
    return Employee.baseSalary * (1 + experience / 5);
};

// Quick rule:
// Employee.value            -> static
// Employee.prototype.value  -> instance (shared)

// Prototype method
// Shared by all instances (memory efficient)
Employee.prototype.getDetails = function () {
    return `Name: ${this.name}, Experience: ${this.experience}, Salary: ${this.calculatePrivateSalary()}`;
};

const emp = new Employee("Maksym", 1);
console.log(emp.getDetails());
console.log(emp.calculatePrivateSalary())
console.log(Employee);
console.log(Employee.calculateSalary(5));


// Class-based Obj creating
class Employee2 {
    static #baseSalary = 1000; // Private static field
    static minSalary = 200; // Public static field

    // Public instance field
    // Each object gets this property automatically
    // NOTE: class fields create object properties, not variables
    greet = "Hello World";

    constructor(name, experience) {
        this.name = name;
        this.experience = experience;
    }

    calculateSalary() {
        return Employee2.#baseSalary * (1 + this.experience/5);
    }

    getDetails() {
        return `Name: ${this.name}, Experience: ${this.experience}, Salary: ${this.calculateSalary()}`;
    }

    static greet() {
        return "Hello";
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }
}

const emp2 = new Employee2("Maksym", 1);
console.log(emp2);
console.log(emp2.greet)
console.log(emp2.getDetails());
console.log(Employee2.greet());
console.log(Employee2.minSalary);
emp2.setName = "Maks";
console.log(emp2.getName)