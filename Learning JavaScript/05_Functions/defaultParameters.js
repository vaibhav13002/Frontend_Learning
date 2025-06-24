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