"use strict";
/*
const bookings = [];

const createBooking = function(flightName,numPassenger=1*2,price=899*numPassenger){
    // numPassenger = numPassenger || 1; // this is a old way of ES5
    // price = price || 899;
    // New way, ES6 :- mention in parameter
    const booking = {
        flightName,
        numPassenger,
        price
    };
    console.log(booking);
}
createBooking("Boeing 787");
createBooking("B2",4,2000);
// skiping one parameter:- make it undefined
createBooking("LH13", undefined, 1000); */

///////// Passing reference
/* const flightName = "LH44";
const jonas = {
    name : "Jonas Schmedmann",
    passport : 54785269,
}

const checkIn = function (flightName,passenger){
    flightName = "Boeing 55";
    passenger.name = "Bega";   // pass by reference , changing original value
}

checkIn(flightName,jonas);
console.log(flightName);
console.log(jonas); */

////////Higher Order function ///
/*
 const oneWord = function(str){
    return str.replace(/ /g , " ").toLowerCase();
 };

const upperfirstWord = function(str){
    const [first,...other] = str.split(" ");
    return [first.toUpperCase(),...other].join(" ");
};

const transform = function(str,fun){
    console.log(`Original String : ${str}`);
    console.log(`Transformed String: ${fun(str)}`);
    console.log(`Transformed by: ${fun.name}`);
};
transform("javascript is Best languAge",upperfirstWord);
console.log("------------------");
transform("javascript is Best languAge",oneWord);  */

//// Function returning Function

// const greet = function(greeting){
//     return function (name){
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greetHey = greet("Hey");
// console.log(greetHey());
// greetHey("Vaibhav")

// greet("Konichiva")("Vaibhav");  // greet konichiva is one function which is returning one function

///Arrow Function
/* const greet = (greeting) => (name)=> console.log(`${greeting} ${name}`);


const greetHey = greet("Hey");
console.log(greetHey());
greetHey("Vaibhav") */

///// .call()

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  // const book : function(){} , new way is
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, "Vaibhav Mishra");
lufthansa.book(650, "Ben Duckett");

const book = lufthansa.book;

const euroWings = {
  name: "Euroings",
  iataCode: "EW",
  bookings: [],
};

// does not work
// book(23,"Ben stokes");  // kyuki this in book global ko point kr rha h , this ke liye batana padega konsa function ussey call kr rha h taki ussey point krey

book.call(euroWings, 25, "Joe root");
//➡ Ye tumhe allow karta hai function ko kisi specific this value ke saath call karne ke liye.  Bhai jab tu chale, to this ka matlab ye object samajh.”
/*
function greet() {
  console.log(`Hello, I am ${this.name}`);
}

const person = { name: "Vaibhav" };
const otherPerson = { name: "Mishra" };

greet();                  // Hello, I am undefined  (kyunki this global ho gaya)
greet.call(person);        // Hello, I am Vaibhav   (this = person)
greet.call(otherPerson);   // Hello, I am Mishra    (this = otherPerson)
*/

/* 💡 Kyu use karte hain?
✅ Jab tumhare paas ek function hai aur tum chahte ho ki wo kisi specific object ke context me chale (uska this wo object ho).
✅ Code reuse karne ke liye — ek function likho aur alag alag objects ke liye use karo. */

const flightData = [211,"Jasprit Bumrah"];
book.apply(lufthansa,flightData);

// Best way to use is 
book.call(lufthansa,...flightData);

/////// .bind()
/* .bind() tumhare function ko ek naya function banakar deta hai jisme this permanently lock ho jata hai — lekin wo turant execute nahi hota!
Matlab:

“Main function de raha hoon, jab chaaho chala lena, lekin this ka value wahi rahega jo tumne bind kiya hai.” */

const bookLF = book.bind(lufthansa);
bookLF(14,"Mohd. Siraj"); 

// we can paas certain parameter like we do in .call method, we call them predefined value , all object or instance creating with it will have that predefined value and the value which you will passs
const bookLFEW = book.bind(lufthansa,65);
bookLFEW("Tyson");


///// this Keyword in Event listeners
lufthansa.planes = 300;
  lufthansa.buyPlanes = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
  }

  /*  Arrow function me this outer lexical context ka ho jata hai 
  document.getElementById("btn").addEventListener("click", () => {
  console.log(this);
});
👉 Is case me this outer scope ka hoga (jo usually window ya jis context me likha gaya hai wo hoga)  */

//// this in Event handler /////
// example
// <button id="btn">Click me</button>
const obj = {
  name: "Vaibhav",
  showName: function() {
    console.log(this.name);
  }
};
document.getElementById("btn").addEventListener("click", function() {
  obj.showName();  // this = obj, output Vaibhav
});
const testfun =  obj.showName;
document.getElementById("btn").addEventListener("click", testfun);  // a bhi chalega and function  likhe event me o bhi chalega
  // a kaam nhi krega: this ka reference function call ke time pe decide hota hai, assign karne ke time pe nahi
/* ➡ JS internally ye karta hai: testfun.call(button);
✅ Isliye this becomes the button element
✅ Aur button ke paas name property nahi hai ⇒ this.name = undefined */ 
/// output : Vaibhav
//////yaha to function banaya h usme object pass krke batatya h ki isko point kro, varna bydefault sirf function hota and usme obj nhi hotha tho button ko point krta
// 👉 Kyunki tumne obj.showName() bulaya, this = obj ban gaya us function ke andar.

// 🔥Ab twist samjho — jab tum event handler ke andar direct this use karte ho
/*
document.getElementById("btn").addEventListener("click", function() {
  console.log(this);  
});
✅ Yeh output dega:  <button id="btn">Click me</button>   */

// ⚠ Event handler me object.function() ka this kaam karega kyunki tumne wo function object ke through bulaya. Lekin agar function direct event handler ban gaya to this = element.

// 2nd Example
const lufthansa2 = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  // const book : function(){} , new way is
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa2.planes = 300;
lufthansa2.buyPlanes = function(){
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// document.querySelector(".buy").addEventListener("click", lufthansa2.buyPlanes);

/* 🔥 Answer (Core JS Concept):
➡ JavaScript mein this function call ke tarike par depend karta hai, definition par nahi.

Yani:Jis tarike se function call hota hai, wahi decide karta hai this kya hoga.
Yahaan tum buyPlanes function ko directly event handler bana rahe ho.

🧠 Isiliye JavaScript:
Event listener me this hamesha us element ko point karta hai jisme event laga hai

Yani this === document.querySelector(".buy") (the button element)  */



/////////// function Returning Function  //////

const addTaxRate = function(rate){
  return function(value){
    return value + value * rate;
  };
};

const addVAT = addTaxRate(0.23);
console.log(addVAT(100));