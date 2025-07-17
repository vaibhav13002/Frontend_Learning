/////////// From Video 18 - 32 ///////////////

// .find() method kya karta hai?
// .find() array ke elements me se pehla element return karta hai jo condition satisfy kare.
// Agar koi match na mile to undefined return karta hai.

/*✅ Syntax:
array.find(function(element, index, array) {
  return condition;  // true hona chahiye
});
*/

const scores = [45, 60, 89, 91, 75,100];

const topper = scores.find(score => score > 90);
// console.log(topper); // 91
// 💡 Sirf pehla match milte hi return kar deta hai, aage check hi nahi karta.

/* Real-world Use: Object Search */
const users = [
  { name: "Vaibhav", id: 1 },
  { name: "Ravi", id: 2 },
  { name: "Amit", id: 3 },
];

const user1 = users.find(u => u.id === 2);
// console.log(user1); // { name: "Ravi", id: 2 }

/*
Q: Callback function ko event object kaise milta hai?

A: JavaScript ka browser engine (like Chrome's V8) jab kisi event ko trigger karta hai, tab wo automatically event listener callback function me ek event object pass karta hai — jo us event ke baare me saari details deta hai. */
/*
const input = document.querySelector("input");

input.addEventListener("input", function (e) {
  console.log("You typed:", e.target.value);
});
*/

  // e.preventDefault(); // this prevents the page to get reload after form submition

//////////////
// Optional Chaining ?. kya hota hai?
// 📖 Definition:
// Optional chaining (?.) allow karta hai safely access karna deeply nested properties ko bina error diye, agar wo property exist nahi karti.

// Maan lo ek object aise hai:
const user = {
  name: "Vaibhav",
  address: {
    city: "Pune"
  }
};

// Agar tum access karo:
// console.log(user.address.city); // ✅ "Pune"

// Par agar address hi na ho:
const user2 = {
  name: "Vaibhav"
};

// console.log(user.address.city); // ❌ ❗ Error: Cannot read property 'city' of undefined

// ✅ Solution: Optional Chaining
// console.log(user.address?.city); // ❓ Agar address exist kare to city milega, warna undefined

// Output : undefined (no error)

//////////////////
// .findIndex() kya karta hai?
// 📖 Definition:
// .findIndex() array me pehla element dhoondta hai jo condition ko satisfy karta ho, aur uska index return karta hai.

// Agar koi match nahi mila, to return karega -1.

/* ✅ Syntax:
array.findIndex(function(element, index, array) {
  return condition;
});
*/
/*
const marks = [85, 90, 32, 78];

const failIndex = marks.findIndex(mark => mark < 40);
console.log(failIndex); // 2 (kyunki 32 < 40, aur wo index 2 pe hai)

// ⚙️ Use Case: Delete an element by index

const names = ["Vaibhav", "Ravi", "Amit"];

const index = names.findIndex(name => name === "Ravi");

if (index !== -1) {
  names.splice(index, 1); // remove Ravi
}

console.log(names); // ["Vaibhav", "Amit"]

//////////////.flat()
const arr3 = [[[1,[2]],3],4,[5,6]];
console.log(arr3.flat());
*/
/////////////////////.map ka usecase with .flat()
// sab acc se movements of array ko extract ke ek variable me store krna 
/*
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const accounts = [account1, account2, account3, account4];

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements.flat());  // sab data ek single array
*/
////////////////////.sort()
/* What is .sort()?
📖 Definition:
.sort() method array ke elements ko sort karta hai (ascending ya descending order me)
by converting them to strings by default. */

// ⚠️ Example 2: Problem with numbers
const nums = [10, 2, 30];
nums.sort();
// console.log(nums); // ["10", "2", "30"] → [10, 2, 30] (wrong order)
// ❌ Kyun? Kyunki .sort() by default string sort karta hai, not numerical.

// ✅ Solution: Use a compareFunction
/*
const nums1 = [10, 2, 30];
nums1.sort((a, b) => a - b); // Ascending
console.log(nums1); // [2, 10, 30]
nums1.sort((a, b) => b - a); // Descending
console.log(nums1); // [30, 10, 2]
*/
// 📌 Rule:
// a - b < 0 → a comes before b
// a - b > 0 → b comes before a
// a - b == 0 → order same

  let movements= [200, 450, -400, 3000, -650, -130, 70, 1300]
  movements.sort((a,b) => {
    if(a>b){
      return 1;
    }
    if(b>a){
      return -1;
    }
  })
  console.log(movements);

  ///////////Array grouping
  // 🔹 Ek array ke elements ko kisi common key ya condition ke base pe alag-alag groups me divide karna.


//   What is Array.from()?
// 📖 Definition:
// Array.from() kisi bhi iterable ya array-like object ko naya real array me convert karta hai.

// Matlab: Jo cheez array jaisi dikhti hai, lekin array nahi hoti, usse sach me array bana deta hai ✅

// const str = "Vaibhav";
// const arr = Array.from(str);
// console.log(arr); // ['V', 'a', 'i', 'b', 'h', 'a', 'v']

// 🧪 Example 2: Convert Set to Array

// const mySet = new Set([1, 2, 3]);
// const arr = Array.from(mySet);
// console.log(arr); // [1, 2, 3]

// 🧪 Example 3: Convert arguments object (array-like) to array
// function showArgs() {
//   const argsArr = Array.from(arguments);
//   console.log(argsArr);
// }
// showArgs(10, 20, 30); // [10, 20, 30]

// 🧪 Example 4: With map function inside

// const arr = Array.from([1, 2, 3], x => x * 2);
// console.log(arr); // [2, 4, 6]

// Example 5: Create an array of 5 elements with values

// const arr = Array.from({ length: 5 }, (_, i) => i + 1);
// console.log(arr); // [1, 2, 3, 4, 5]
// (_, i) → means we're ignoring the first param and using the index i

//////////setTimeout()
const ingredients = ["olives","spinach"];
const pizzaTimer = setTimeout((ing1,ing2)=>console.log(`Here is your pizza with ${ing1} and ${ing2}`),3000,...ingredients);
console.log("waiting...");
if(ingredients.includes("spinach")){
  // clearTimeout(pizzaTimer); // time out ko cancel 
  console.log("timeout clear");
}