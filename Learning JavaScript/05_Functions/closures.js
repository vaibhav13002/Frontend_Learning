function outer() {
  let name = "Vaibhav";

  function inner() {
    console.log("Hello " + name);  // uses outer variable
  }

  return inner;
}

const greet = outer();  // outer() executes, but returns inner()

greet();  // Output: Hello Vaibhav ✅

/* 🧠 Yaha kya ho raha hai?
outer() run hone ke baad normally uske variables name delete ho jaate

BUT, kyunki inner() function ko return kiya gaya aur usne name use kiya tha,

JS closure bana deta hai — taki inner() jab bhi chale, usko name milta rahe ✅ */
 
// Example
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

// Example using timeout
// agar tum setTimeout() ke andar closure ka use karte ho, to JavaScript us outer variable ko yaad rakhta hai — garbage collection usse clean nahi karega
// jab tak wo timeout kaam complete na kar le ✅

function greetLater() {
  const name = "Vaibhav";

  setTimeout(function () {
    console.log("Hello, " + name); // 🔥 Closure on `name`
  }, 3000);
}

greetLater();

/* Jab greetLater() function execute ho gaya, aur uska stack se kaam khatam ho gaya,
to kya name variable delete ho jayega?

🧠 Answer: Nahi!
Kyunki setTimeout() ke andar ka function name pe dependent hai

JavaScript us function ke closure environment ko memory me preserve rakhta hai

Jab tak timer complete nahi ho jata, tab tak name ko garbage collector cleanup nahi karta

✅ Jab 3 sec baad callback chalega, us waqt name still accessible hoga */

// ✅ Agar inner function ne outer variable ko use hi nahi kiya, toh uska closure nahi banta —
// ❌ aur us unused variable ko JavaScript garbage collection free kar sakta hai.

