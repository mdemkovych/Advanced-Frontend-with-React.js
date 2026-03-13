/* OOP Prototype Inheritance */

// 1. Function constructor + prototype method
function Vehicle(model, speed) {
    this.model = model;
    this.speed = speed;
}

Vehicle.prototype.drive = function () {
    console.log(`${this.model} is driving`);
}

const veh = new Vehicle("Volvo", 100 );
console.log(veh);
veh.drive();


// 2. Class syntax = "sugar" over prototype
class Samohode {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }

    drive() {
        console.log(`${this.model} is driving`);
    }
}

class UltraSamohode extends Samohode {
    constructor(model, speed) {
        super(model, speed);
    }

    jump() {
        console.log(`${this.model} is jumping`);
    }
}

const samohode = new Samohode("Hyundai", 100);
console.log(samohode);
samohode.drive();

const ultraSamohode = new UltraSamohode("CYBER-track", 400);
console.log(ultraSamohode);
ultraSamohode.drive();
ultraSamohode.jump();


// 3. Inheritance with function constructors
function Car(model, speed, passengers) {
    console.log("Car");
    console.log(this);

    // Borrow constructor logic from Vehicle
    // Copies ONLY instance properties from Vehicle
    Vehicle.call(this, model, speed);
    this.passengers = passengers;
    console.log(this);
}

const car = new Car("BMW", 300, 5)
console.log(car);
console.log("---------");
veh.drive();

// At this point car.drive() will NOT work yet
// Because Vehicle.call(...) copies only instance props,
// but drive() is on Vehicle.prototype, not inside constructor
try {
    car.drive();
} catch (error) {
    console.log('An error occurred: ' + error.message);
}

// Proper prototype inheritance
Car.prototype = Object.create(Vehicle.prototype);

const myCar = new Car("Audi", 200, 4);
console.log(myCar);
console.log(myCar instanceof Car);
console.log(myCar.constructor.name);
myCar.drive(); // works through a prototype chain

console.log("\nBelow some education things\n");
function printInfo1() {
    console.log("------")
    console.log(arguments);
    console.log([...arguments])
    console.log(this);
    return this.model + this.speed + this.passengers;
}

// 4. Exploring this, arguments, destructuring
function printInfo2({model, speed, passengers}) {
    console.log(arguments);

    // Get constructor name
    console.log("Constructor:", arguments[0].constructor.name);

    // Get a detailed type
    console.log("Type:", Object.prototype.toString.call(arguments[0]));

    // Get a basic type
    console.log("Typeof:", typeof arguments[0]);

    // Check if it has specific properties
    console.log("Properties:", Object.keys(arguments[0]));

    console.log(this.model + this.speed + this.passengers);

    return model + speed + passengers;
}

console.log(printInfo1.call(car));

console.log(printInfo2(car));

console.log(printInfo2.call(car, [],[],[]))


// 5. Prototype method override on instance
function Animal(name) {
    this.name = name;
}

Animal.prototype.say = function () {
    console.log(`I am ${this.name}`);
}

const dog = new Animal("Dog");
const cat = new Animal("Cat");

dog.say(); // Instance method
cat.say(); // Prototype method

// Override method for single instance
dog.say = function () {
    console.log(`I am ${this.name} and I am a dog`);
}

dog.say();
cat.say();