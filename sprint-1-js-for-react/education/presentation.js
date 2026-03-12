/* PRESENTATION */

// Type conversions
let a = 20;
a = a + "Maks";
console.log(a);

let b = "10";
let num = +b;
console.log(num);

// parseInt ()
// parseFloat ()

// !! - True
let c = "1";
let bln = !c;
console.log(bln); // false
console.log(typeof bln); // "boolean". typeOf - to check the type

//array
const arr = [];
const cities = ["London", "Paris", "Berlin"];
console.log(cities[0]); // London

// cities[5] = "Kyiv";
// console.log(cities);

// for of
for (let city of cities) {
    console.log(city);
}

//for
for (let i = 0; i < cities.length; i++) {
    cities[i] = cities[i] + "!";
}
console.log(cities);

// adding an element to the end
cities.push("Kyiv");
console.log(cities);

// deleting the first element
cities.shift()
console.log(cities);

// delete an element of the array by its index (position)
const deletedElem = cities.splice(0, 1);
console.log(deletedElem);
console.log(cities);

//filter() method creates a new array with all the elements tested
const newArr = cities.filter(function(city) { return city.length < 5 });
console.log(newArr);

// map() method creates a new array by performing
const newArray = cities.map(function(city) { return city + "Capital" });
console.log(newArray);

// reduce() method performs the reducer function
const data = [2, 4, 6, 8];
function reducer(total, value) { return total + value; }
const sum = data.reduce(reducer);
console.log(sum);