const coffeeMenu = require(`./coffee_data.js`);

console.table(coffeeMenu);

console.log();

const drinkArray = coffeeMenu.map((item) => item.name);

console.log(drinkArray);

console.log(coffeeMenu.filter((item) => item.price <=5));