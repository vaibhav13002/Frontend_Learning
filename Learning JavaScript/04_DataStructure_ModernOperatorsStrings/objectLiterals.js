const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
    const open = restaurant.openingHours[day]?.open ?? "closed";  // || is giving an error
    console.log(`We are open on ${day} at ${open}`);
} 
console.log(restaurant.order?.(1,2) ?? "Method does not exists");

//Using OR || operator creating one bu that , on saturday open is 0 , so OR operator considering it as falsy value and giving second output , solution is Nullishing operator

///Optional chaining in an Array
const user = [{name:"Vaibhav" , email: "bega@gmail.com"}];
console.log(user[1]?.name ?? "User Array is Empty");