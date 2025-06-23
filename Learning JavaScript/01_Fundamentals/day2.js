// 10
//// Template literals
// const name = "Vaibhav";
// const String = `Hi My name is ${name} Mishra`
// console.log(String);

//// MultiLine Strings
// console.log("Hi My Name is \n\
//     Vaibhav Mishra");

// console.log(`Hi My Name is
//     Thor`);

//// Type Conversion
// const age = 10;
// const isOLdEnough = 18 >= age;
// console.log(isOLdEnough);

// const year = '1990';
// let convertYear = Number(year);  // converting string to Number
// console.log(convertYear + 10);

// ///Mix type value
// const newYear = "2005a";
// console.log(typeof newYear);
// let convertNew = Number(newYear);
// console.log(10 + convertNew);  // since it is NAN , so nothing will happen

// console.log('5' - 10);
/////////////////////////////////////////////////////////
// console.log('5' + 10);
// console.log(typeof ('10'-'3'-1));  // aisa sahi h// aisa likhne pr NaN ayegatypeof '10'-'3'-1
/* Isme typeof '10' sabse pehle evaluate hoga (kyunki typeof ek unary operator hai).
👉 typeof '10' ka matlab hai: '10' ka data type kya hai?
👉 '10' ek string hai.
👉 Toh typeof '10' ka result hoga: 'string' (ek string value).
Jab JS mein - operator use karte ho aur operands string ho, toh JS koshish karta hai unko number banane ki.
❌ 'string' ko number mein convert karne ki koshish karega -> NaN (kyunki 'string' koi valid number nahi hai)
❌ '3' ko number mein convert karega -> 3
NaN - 1
NaN ka koi arithmetic result bhi NaN hi hota hai. */

// let n = '1' + 1;
// console.log(n-'1');

// ////falsy Values
// console.log(Boolean({}));  //  JavaScript mein object hamesha truthy hota hai, chahe wo empty ho ya filled.
// console.log(Boolean(``));
// console.log(Boolean(`${{}}`)); // true → "[object Object]" is a non-empty string, so truthy

//// Loose and Strict Compare == vs ===
// const num = prompt("what is your age");
// console.log(typeof num);

// if(num === 23){
//     console.log("Congrats its a Lucky No!!");

// }

// const day = "Thursday";

// switch (day) {
//     case "Monday":
//         console.log("the day is monday");
//         break;

//     case "Thursday":
//         console.log("the day is Thursday");
//         break;
//     default:
//         console.log("Either Not a correct datatype or Incorrect day");

// }

///////////Fundamentals Part 2
"use strict";
// 1. Errors ko jaldi pakadta hai
// 2. Reserved keywords ka galat use block karta hai
// 3. Duplicate parameter allowed nahi
// 4. Silent bugs ko visible bana deta hai

/////Functions
// function foodPrcessing(argument1, argument2) {
//   console.log(argument1, argument2);
//   const juice = `we can make ${argument1} juice and ${argument2} juices.`;
//   console.log(juice);
//   return juice;
// }
// foodPrcessing("Mango", "Apple");
// let returnOutput = foodPrcessing("Grapes", "Orange");
// console.log(returnOutput);



// console.log(withoutReturn());   // hoisting, only possible for Normal function, not with function stored in variables, arrow function
// // if there is not return in function, bydefault it returns to undefined
// function withoutReturn(){
//     console.log("Function without Return");
// }
// withoutReturn();


//////Objects

const Vaibhav = {
  firstName : "Vaibhav",
  lastName : "Mishra",
  age : 23,
  job : "Software developer",
  friends : ["Tyson" , "Max" , "Kai"],
  birthYear : 2002,
  // calcAge : function(birthYear){
  //   return 2025 - birthYear;
  // }
  // using this
    calcAge : function(){
    return 2025 - this.birthYear;
  },
  hasDrivingLicense : true,
  getSummary : function(){
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDrivingLicense ? "a" : "not"} driver's license `;
  }
};
// Vaibhav is a 23-year old Software Developer, and he has a/not driver's license 
// console.log(Vaibhav);
// console.log(Vaibhav['lastName']);
// console.log(Vaibhav['age']);

// const nameKey = "Name";
// console.log(Vaibhav["first"+nameKey]);  // concat kiya bas

// console.log(`${Vaibhav["firstName"]} has ${Vaibhav.friends.length} friends and his best friend is ${Vaibhav.friends[0]}`);

////Function bounded with object is a Method
console.log(Vaibhav.calcAge(2002));
console.log(Vaibhav["calcAge"](2002));
console.log(typeof (Vaibhav.calcAge));

// using this
// console.log(Vaibhav.calcAge());

////challenge
// Vaibhav is a 23-year old Software Developer, and he has a/not driver's license 
//// we will make above challenge as a function to get is called
// console.log(Vaibhav.getSummary());


//challenge
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

const mark = {
  fullName : "Mark Miller",
  mass : 78,
  height : 1.69,
  calcBMI : function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

const john = {
  fullName : "john wick",
  mass : 92,
  height : 1.95,
  calcBMI : function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}
mark.calcBMI();
john.calcBMI();  // a dono fucntion isliye call krna pad rha h kyuki mark.bmi use kr skeyjo ki this.bmi krke ek property create kr rha h jo store kr rha h calculation taki baar baar fucntion call na karna padey
// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
console.log(`${mark.fullName}'s BMI ${mark.bmi} is ${mark.calcBMI() > john.calcBMI()? "higher" : "lower"} than ${mark.fullName}'s BMI ${john.calcBMI()} `);


// ${mark.bmi} and ${john.calcBMI()}
// ${mark.bmi} :- ek baar fucntion call krke value property ke andar store hogya h jo reuse horha h 
// ${john.calcBMI()}:- har baar function call krna padega