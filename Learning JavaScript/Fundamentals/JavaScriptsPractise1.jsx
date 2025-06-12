// let a = { x: 10 };
// let b = a;
// b.x = 20;
// console.log(a.x); // 20 – kyunki dono same heap object ko point kar rahe hain


// let a = { x: 10 };
// let b = { ...a }; // Shallow copy
// b.x = 20;
// console.log(a.x); // 10
// console.log(b.x); // 20


/// Data type conversion
// let score = 33;
// console.log(typeof score);

// let Stringscore = "33";
// console.log(typeof Stringscore);
// console.log(Stringscore);

// let mix = "33abc"
// console.log(typeof mix);
// let Convertmix = Number(mix);
// console.log(typeof Convertmix);
// console.log(Convertmix);  // kya o sachme number h


// console.log("1" + (2 + 3));
// console.log("1" + 2 + 3);


//// Heap and stack memory
// premitive and refernce type data

// let name = "Vaibhav";
// let surname = name;
// surname = "Mishra"

// console.log(surname);
// console.log(name);


// let ObjName = {
//     Name : "Vaibhav",
//     age : 23
// }

// let ObjSurname = ObjName;
// ObjSurname.name = "Mishra";
// console.log(ObjName.name);  // dono ko same reference diya gya h
// console.log(ObjSurname.name);

// Date and Time 
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//// Objects

// let Obj = {
//     Name : "Vaibhav",
//     Age : 23,
//     "email" : "vaibhav@gmail.com"
// };

// console.log(Obj.email);
// console.log(Obj["Age"]);

// Obj.greeting = function(){
//     console.log("This is Function");   
// }
// console.log(Obj.greeting());


// console.log(typeof("Value is : " + 5));  // this is converting into string
// console.log(typeof("Value is : " , 5));   // Number


// console.log("Line 1: This will execute.");
// let x = 10;
// console.log("Line 3: x is", x);

// // Simulate some valid operations
// if (x > 5) {
//   console.log("Line 6: x is greater than 5.");
// }

// // Yeahan se error shuru hoga
// console.log("Line 8: This will also execute.");

// // Line 9: Intentional error - trying to call a method on 'undefined'
// let myUndefinedVar;
// myUndefinedVar.someMethod(); // This line will cause a TypeError

// console.log("Line 11: This line will NOT execute."); // This line will not be reached

///// Hoisting
// console.log(greet); // Output: undefined
// // greet(); // ERROR: greet is not a function (because it's undefined)
// var greet = function() {
//   console.log("Hello from function expression!");
// };
// greet(); // Output: Hello from function expression!

// console.log(myLetVar); // ERROR: Cannot access 'myLetVar' before initialization (TDZ) // Reference Error
// let myLetVar = 20;
// console.log(myLetVar); // Output: 20


// if(" "){ // this is not empty string, it has space in it 
//     console.log("True Value")
// }

let arr = [];
if([]){ // this is not empty string, it has space in it 
    console.log("True Value")
}