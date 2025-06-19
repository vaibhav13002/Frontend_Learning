/* Iterables are those objects that implement the Symbol.iterator method.

➡️ Plain objects {} me yeh method nahi hota
➡️ But Arrays, Strings, Maps, Sets — ye sab iterable hote hain ✅ */

// 🔷 ✅ How to loop through object?
/* const person = {
  name: "Vaibhav",
  age: 24,
};
//  1. for...in — loops over keys:
for (let key in person) {
  console.log(key, person[key]);
}  */

//  2. Object.keys() + for...of (indirectly making it iterable):
// for (let key of Object.keys(person)) {
//   console.log(key, person[key]);
// }

//  3. Object.entries() for key-value pairs:
// for (let [key, value] of Object.entries(person)) {
//   console.log(key, value);
// }

////////// Making copy
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Taj Hotel";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

///// Creating New Object using old one

const newRestaurant = {
  ...restaurant,
  "founded by": "Vaibhav",
  Year: 2025,
};
// console.log(newRestaurant);

//////////////////////// Rest ///////////////////////////////////
// Rest operator (...) ka use hota hai to gather multiple values into a single variable — usually as an array.

/* 1. Function me rest parameters

function add(a, b, ...others) {
  console.log("a:", a);         // 1
  console.log("b:", b);         // 2
  console.log("others:", others); // [3, 4, 5]
}
add(1, 2, 3, 4, 5);  */

/* 2. Array Destructuring with rest

const arr = [10, 20, 30, 40];
const [a, ...rest] = arr;
console.log(a);    // 10
console.log(rest); // [20, 30, 40] */

/* 3. Object Destructuring with rest

const user = {
  name: "Vaibhav",
  age: 24,
  city: "Mumbai",
  role: "Developer"
};

const { name, ...others } = user;

console.log(name);   // Vaibhav
console.log(others); // { age: 24, city: 'Mumbai', role: 'Developer' }  */

/* ⚠️ Important Note:
Rest operator is used for collecting multiple values into one variable
It must always be the last parameter in function or destructuring

function example(...args, last) {} // ❌ Syntax Error
function example(first, ...rest) {} // ✅ Valid:  */

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 4, 5, 6);
add(3);
const x = [1, 6, 2];
add(...x);
