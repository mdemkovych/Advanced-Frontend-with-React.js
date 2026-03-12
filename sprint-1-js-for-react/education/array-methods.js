/* METHODS ARRAY */
// filter, map, reduce

// filter
const phonePrice = [400, 700, 3000, 1200, 8000, 1500, 100, 3200, 4600];

const filterPrice1 = phonePrice.filter(function(price) { // anonymous function
    return price >= 1000 && price <= 3000;
})
console.log(filterPrice1);

const filterPrice2 = phonePrice.filter(price => price >= 1000 && price <= 3000); // arrow function
console.log(filterPrice2);


// map
const phoneBrands = ['Apple', 'Samsung', 'LG', 'Motorola', 'Nokia', 'Sony', 'HTC', 'Huawei', 'Xiaomi'];

const mapBrands = phoneBrands.map(brand => brand.toUpperCase());
console.log(mapBrands);


// reduce((accumulator, currentValue) => {}, initialValue);
const orderPrice = [140, 530, 560, 123, 900];
const total = orderPrice.reduce((total, price) => {
    console.log(`${total} => ${price}`);
    return total + price;
}, 0);

console.log('Total price: ' + total);

const orderBrands = ['Apple', 'Samsung', 'Huawei'];
const resBrands = orderBrands.reduce((brands, brand) => `${brands} - ${brand}`);
console.log(resBrands);