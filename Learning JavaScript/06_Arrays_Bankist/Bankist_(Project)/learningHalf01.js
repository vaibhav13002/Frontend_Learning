////////// From Video 1 - 17 ////////

/* .innerHTML kisi HTML element ke andar ka poora HTML content read ya update karne ke liye use hota hai.
element.innerHTML       // Get content
element.innerHTML = "new HTML";   // Set/replace content
*/

// 🔧 .insertAdjacentHTML(position, htmlString)
/* 
element.insertAdjacentHTML("position", "<tag>your HTML</tag>");

"position":-	Kahan insert karna hai (explained below)
htmlString:- 	Jo HTML tum insert karna chahte ho (string format)

Position	Meaning	Example
"beforebegin"	Element ke bahar, pehle	✅ Inserted before the element
"afterbegin"	Element ke andar, shuru me	✅ As first child
"beforeend"	Element ke andar, end me	✅ As last child
"afterend"	Element ke bahar, baad me	✅ Inserted after the element */

/////Example
/*
{ <div id="box">Hello</div>
let box = document.getElementById("box"); }

box.insertAdjacentHTML("beforebegin", "<p>👈 Before Box</p>");
box.insertAdjacentHTML("afterbegin", "<p>🔼 Inside Box - Top</p>");
box.insertAdjacentHTML("beforeend", "<p>🔽 Inside Box - Bottom</p>");
box.insertAdjacentHTML("afterend", "<p>👉 After Box</p>");
*/

// 🖼 Final DOM Structure:
  /*
<p>👈 Before Box</p>
<div id="box">
  <p>🔼 Inside Box - Top</p>
  Hello
  <p>🔽 Inside Box - Bottom</p>
</div>
<p>👉 After Box</p>

*/

/* Use Cases:
Tum JS se card ya alert box inject karna chahte ho page me

Tum page me kisi section ke andar HTML add karna chahte ho bina pura innerHTML wipe kiye

Avoids replacing whole innerHTML (better performance) 

⚠️ Important:
HTML string hone chahiye valid (like "<p>...</p>")

Directly DOM insert hota hai, no need to create elements manually

Doesn’t run <script> tags injected this way (for security)


✅ Comparison: innerHTML vs insertAdjacentHTML
Feature	innerHTML	insertAdjacentHTML()
Replaces content?	❌ Replaces full content	✅ Adds without replacing
Performance	⛔ Slower (DOM rebuild)	✅ Faster (targeted insert)
Insertion Options	❌ Only inside	✅ Inside + outside both
*/


// movements.forEach(function (mov, i) {
//   ...
// });

/* 🔹 (mov, i) ka kya matlab hai?
Jab tum array.forEach(function (element, index, array) {...}) likhte ho, tab:

element → Array ka current item (yaha mov)

index → Us item ka position ya index (yaha i)

array → Pura original array (yaha use nahi hua, optional hai) */

/////////.map() fucntion
/* map() ek array method hai jo array ke har element par ek function lagata hai aur uska naya result return karta hai ek naye array me — bina original array ko change kiye.  
Jab aapko original array ke har element par kuch transformation karke ek naya array banana ho — bina original ko badle. */

// const pricesInINR = [100, 200, 300];
// const pricesInUSD = pricesInINR.map(function (price) {
//   return price / 100;
// });
// console.log(pricesInUSD); // [1, 2, 3]

// converting into arrow function
const pricesInINR = [100, 200, 300];
const pricesInUSD = pricesInINR.map( price => price / 100 );
console.log(pricesInUSD); // [1, 2, 3]


// Syntax
// const newArray = originalArray.map(function (element, index, array) {
//   return something;
// });

let answ= [];
for(mov of pricesInINR){
  answ.push(2*mov);
}
console.log(answ);

////////////////////////////////////////////
//  .join() method kya karta hai?
// 📖 Definition:
// .join() ek array ke saare elements ko ek single string me convert karta hai, aur beech me separator lagata hai (jaise ,, -, etc.)

const fruits = ["apple", "banana", "mango"];
const result = fruits.join(" | ");
console.log(result);

console.log([1,2,3].toString()); // "1,2,3"

// .join() → custom separator de sakte ho
// .toString() → sirf default comma lagata hai

////////////////////////////////
// .filter() method kya karta hai?
// 📖 Definition:
// .filter() ek array method hai jo original array ke selected elements ko return karta hai — jo condition true karte hain.

// Yeh method ek callback function ko deta hai, aur usme har element ko test karta hai. Jo element true return karta hai, wo naye array me aata hai.
/*
const newArray = originalArray.filter(function(element, index, array) {
  return condition;  // ✅ Only those elements jinka result true hoga, wo aayenge
});
*/
const transactions = [200, -100, 300, -50, 400];
const deposits = transactions.filter(function (amt) {
  return amt > 0;
});
console.log(deposits); // [200, 300, 400]


////////////////
// .reduce() method kya karta hai?
// 📖 Definition:
// .reduce() array ke sabhi elements ko ek single value me reduce (ghata/convert) karta hai, jaise ki:
/* syntax
array.reduce(function(accumulator, currentValue, index, array) {
  return updatedAccumulator;
}, initialValue); */

const prices = [100, 200, 300];

const total = prices.reduce(function (acc, val) {
  console.log(acc);
  console.log(val);
  return  acc + val;
}, 2); // initial value = 2

console.log(total); // 600

// Arrow Function Version:
// const total = prices.reduce((acc, val) => acc + val, 0);
/*
🔥 Example: Maximum value nikalna

const numbers = [10, 45, 67, 32];

const max = numbers.reduce((acc, val) => (val > acc ? val : acc), numbers[0]);

console.log(max); // 67 */

// Count total deposits

const transactions1 = [200, -100, 300, -50, 400];

const totalDeposits = transactions1
  .filter(amount => amount > 0)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalDeposits); // 200 + 300 + 400 = 900