// 1
const coffeeMenu = require(`./coffee_data.js`);

console.table(coffeeMenu);

console.log();

// 2
const drinkArray = coffeeMenu.map((item) => item.name);

console.log(drinkArray);

// 3
console.log(coffeeMenu.filter((item) => item.price <=5));

// 4
console.log(coffeeMenu.filter((item) => item.price % 2 === 0));

// 5
const orderTotal = (costTotal, drink) => {
  return costTotal += drink.price;
}
console.log(coffeeMenu.reduce(orderTotal, 0));

// 6

const seasonalDrinks = coffeeMenu.filter((item) => item.seasonal);

console.log(seasonalDrinks);

// 7

seasonalDrinks.forEach((item) => console.log(item.name, ` with imported beans`));

