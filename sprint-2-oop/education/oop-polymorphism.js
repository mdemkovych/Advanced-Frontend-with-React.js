/* OOP Polymorphism */

class Vehicle {

    constructor(kind, speed) {
        this.kind = kind;
        this.speed = speed;
    }

    drive(info) {
        console.log(`${this.kind} is driving ${info !== "" ? info : ""}`);
    }
}

class Car extends Vehicle {

    constructor(kind, speed, passengers) {
        super(kind, speed);
        this.passengers = passengers;
    }

    drive() {
        const additionalInfo = `Maximum speed: ${this.speed} km/h`;
        super.drive(additionalInfo);
        // console.log(`Maximum speed: ${this.speed} km/h`);
    }
    carryPassengers() {
        console.log(`${this.kind} is carrying ${this.passengers} passenger`);
    }
}

const suv = new Car("Mercedes-Benz",200, 7);
suv.drive();
suv.carryPassengers();

class Square {
    constructor(side) {
        this.side = side;
    }
}

class Circle {
    constructor(side, radius) {
        this.side = side;
        this.radius = radius;
    }
}