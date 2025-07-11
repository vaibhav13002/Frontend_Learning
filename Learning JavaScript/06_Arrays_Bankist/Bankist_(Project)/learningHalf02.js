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
console.log(topper); // 91
// 💡 Sirf pehla match milte hi return kar deta hai, aage check hi nahi karta.

/* Real-world Use: Object Search */
const users = [
  { name: "Vaibhav", id: 1 },
  { name: "Ravi", id: 2 },
  { name: "Amit", id: 3 },
];

const user1 = users.find(u => u.id === 2);
console.log(user1); // { name: "Ravi", id: 2 }

/*
Q: Callback function ko event object kaise milta hai?

A: JavaScript ka browser engine (like Chrome's V8) jab kisi event ko trigger karta hai, tab wo automatically event listener callback function me ek event object pass karta hai — jo us event ke baare me saari details deta hai. */

const input = document.querySelector("input");

input.addEventListener("input", function (e) {
  console.log("You typed:", e.target.value);
});


  e.preventDefault(); // this prevents the page to get reload after form submition

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
console.log(user.address.city); // ✅ "Pune"

// Par agar address hi na ho:
const user2 = {
  name: "Vaibhav"
};

console.log(user.address.city); // ❌ ❗ Error: Cannot read property 'city' of undefined

// ✅ Solution: Optional Chaining
console.log(user.address?.city); // ❓ Agar address exist kare to city milega, warna undefined

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