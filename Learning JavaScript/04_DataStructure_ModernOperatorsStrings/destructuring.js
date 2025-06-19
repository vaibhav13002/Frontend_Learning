const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // ES6 enhanced object literals
//   openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  ///yaha pr aarha h Obejct a Parameter  // oder is not important here
  objSend({time,address,starterIndex,mainIndex}){
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }
}

// Recieve 2 Return value and string them into Variables
// const [starterMenus , mainMenus] = restaurant.order(2,3);
// console.log('Starter Menu:- '+ starterMenus + " Main Menu:- "+mainMenus);

// Object Destructuring me same name use krna h jo object ke andar h 
/* const {openingHours,mainMenu,starterMenu,categories,location,name} = restaurant;
console.log(openingHours,mainMenu,starterMenu,categories,location,name); */

const {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);
// ab agar opening hours ke andar ke objects ko access krna h tho 

const {fri:{open,close}} = openingHours;
console.log(open,close);


////Cannot assing value to code block  // Need to use braces
let a = 100;
let b = 200;
const obj = {a:1,b:2,c:3,d:4};
({a,b} = obj);
console.log(a,b);

/// Passing a Object a Argiments in a Function and Destructuring them in the parameters only and using it inside the function

restaurant.objSend({
    time : "08:30pm",
    address : "Andheri West",
    mainIndex : 2,
    starterIndex:3,

});


///// rest example
const {sat, ...otherWeekdays} = restaurant.openingHours;
console.log(otherWeekdays);
console.log(sat);