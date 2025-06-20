
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
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
}; 

const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
/// For of Loop
for(const item of menu){
  console.log(item);
}
for(const items of menu.entries()){
  console.log(`${items[0]+1} : ${items[1]}`);
}
console.log("---using destructuring---");
for(const [i,el] of menu.entries()){
  console.log(`${i+1} : ${el}`);
}

/// Object.keys
for(const day of Object.keys(openingHours)){
  console.log(day); 
}

const properties = Object.keys(openingHours);
let str = `We are open on ${properties.length} days :`;

for(const day of properties){
  // console.log(typeof day);  //String
  // console.log(day);
  str += `${day}, `;
}
console.log(str);

//For value
const values = Object.values(openingHours);
console.log(values);

//For Entries
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key,{open,close}] of entries){
  console.log(`We are open on ${key} at ${open} and closed at ${close}`);
}