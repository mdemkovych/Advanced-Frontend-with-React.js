/* OOP Inheritance */

class Vehicle {

    constructor(kind) {
        this.kind = kind;
    }

    drive() {
        console.log(`${this.kind} is driving`);
    }
}

class Car extends Vehicle {

    constructor(kind, passengers) {
        super(kind);
        this.passengers = passengers;
    }

    carryPassengers() {
        console.log(`${this.kind} is carrying ${this.passengers} passenger`);
    }
}

const car = new Car("Audi", 5);
car.carryPassengers();
car.drive();
console.log(car);