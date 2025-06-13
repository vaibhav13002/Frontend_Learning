// Vs code Setup

// const calcAge = birthYear => 2025 - birthYear;

// const xyz = "20";
// console.log();

/// Debugging Challenge
// let measurements;
// const measureKelvin = function () {
//     const va = "Sun",
//   measurements = {
//     type: "temp",
//     unit: "celsius",
//     value: prompt("Degrees celsius :"),
//   };
//   console.log(typeof measurements.value);
//   const kelvin = measurements.value + 273;
//   return measurements;
// //   return kelvin;
// };
// // measureKelvin();   // ek baar function ko call krna padega
// // console.log(measureKelvin().measurements);
// console.log(measureKelvin().type);


////// Kab kya Kaise Access kar sktey h 
//1. Function ke andar object hai, function number return kar raha hai:
/* const measureKelvin = function() {
    const measurements = { type: 'temp', value: 10 };
    return measurements.value + 273; // sirf number return ho raha hai
} */

/* Jab aap measureKelvin() call karte ho, sirf number milta hai (object nahi).
Isliye measureKelvin().type ya measureKelvin().measurements access nahi kar sakte. */
//  console.log(measureKelvin().type); // undefined
//  console.log(measureKelvin().measurements); // undefined


// 2. Agar aapko object ki properties access karni hain:
// Function ko pura object return karwana padega:

// const measureKelvin = function() {
//     const measurements = { type: 'temp', value: 10 };
//     return measurements; // ab pura object return ho raha hai
// }
// console.log(measureKelvin().type); // 'temp'


// 3. measureKelvin().measurements kab kaam karega?
// Tabhi kaam karega jab function ek object return kare jisme 'measurements' property ho:

// const measureKelvin = function() {
//     return {
//         measurements: { type: 'temp', value: 10 }
//     };
// }

// console.log(measureKelvin().measurements); // { type: 'temp', value: 10 }
// Agar function aisa object return nahi karta, toh measureKelvin().measurements undefined dega.

// Summary Table
// Function Return Kya Kar Raha Hai?	Access Kaise Karoge?	Output
// Number (e.g. return 283;)	measureKelvin().type	undefined
// Object (e.g. return measurements;)	measureKelvin().type	property value milegi
// Object with measurements (e.g. {measurements})	measureKelvin().measurements	object milega


// Conclusion:
// Jo value function return karta hai, wahi aap dot operator se access kar sakte ho.
// Agar function number return kare, toh uski property access nahi kar sakte.
// Agar function object return kare, tabhi us object ki properties access kar sakte ho.
// measureKelvin().measurements tabhi chalega jab function ek aisa object return kare jisme measurements property ho.

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/


// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

// const data = [17, 21, 23];

// const printForecast = function(data){
//     let str = '';
//     for(let i=0; i<data.length; i++){
//         str += `... ${data[i]} in ${i+1} days`;
//     }
//     console.log(str);
// }
// printForecast(data);
// console.log(`... ${data[0]}ºC ... ${data[1]}ºC ... ${data[2]}ºC ...`);