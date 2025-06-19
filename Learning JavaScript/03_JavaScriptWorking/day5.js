// Arrow function and this key word

// const user = {
//   name: "Vaibhav",
//   sayHello: () => {
//     console.log("Hello", this.name);
//   },
// };

// user.sayHello(); // ❌ Output: Hello undefined

/* Why?
Arrow function doesn't bind its own this — it takes this from where it was defined, not where it was called.*/

// ✅ Arrow function is great when you want to preserve this from outside (e.g. in callbacks)

/* function Person(name) {
  this.name = name;

  setTimeout(() => {
    console.log("Hi", this.name); // ✅ Works correctly
  }, 1000);
}

new Person("Vaibhav");  */

//  2. arguments object — Arrow functions don't have their own
/* Regular Function:

function sum() {
  console.log(arguments);
}

sum(1, 2, 3); // ✅ Output: [1, 2, 3]  */

/* Arrow Function:

const sum = () => {
  console.log(arguments);
};

sum(1, 2, 3); // ❌ Error: arguments is not defined */

// ✅ Solution:
// Agar arrow function ke andar arguments chahiye, to usko kisi regular function ke andar likho jaha arguments available ho.

// ✅ Example: Arrow function inside regular function

/* function outerFunction() {
  // Arrow function inside regular function
  const innerArrow = () => {
    console.log("Arrow Function - arguments:", arguments);
  };

  innerArrow();
}

outerFunction(10, 20, 30); */


////Scope
// function first(){
//     const name = "vaibhav";
//     // console.log(surname); // reference error TDZ
//     function second(){
//         console.log(`My name is ${name} ${surname}`);
//     }
    
//     const surname = " Mishra"
//     second();
// }
// first();
// second();


////////// ths Keyword //////
/* Case 1: Regular function in global scope
function showThis() {
  console.log(this);
}

showThis(); // In browser: 👉 Window object
🔍 Explanation:
Jab function normal tarike se call hota hai (not as method of an object)
Toh this refers to global object (browser me window, Node.js me global) */

/* Case 2: Inside an object (as a method)
const person = {
  name: "Vaibhav",
  show: function () {
    console.log(this);
  },
};

person.show(); // 👉 `this` refers to `person` object
Explanation:
Jab function ko object ke method ke tarah call karte ho

Toh this refers to that object itself */

 /*Case 3: Regular function inside method (nested regular function)
 const user = {
  name: "Vaibhav",
  show: function () {
    function inner() {
      console.log(this);
    }
    inner();
  },
};

user.show(); // ❌ this = Window (not user)

Why?
inner() is still a regular function
It doesn’t care that it’s inside user
It runs in global context */

/* Case 4: Fix using arrow function (lexical this)
const user = {
  name: "Vaibhav",
  show: function () {
    const inner = () => {
      console.log(this); // ✅ user
    };
    inner();
  },
};

user.show();  // ✅ this = user */

/*Arrow function inside method :-	Same as outer this */

// Object ke andar define ki gayi cheeze JavaScript ke scope rules follow nahi karti — unka access hota hai object ke through.

/////Arrow function this
/* const user = {
  name: "Vaibhav",
  greet: function () {
    const arrow = () => {
      console.log("Hi " + this.name);
    };
    arrow();
  }
};

user.greet(); // ✅ Output: Hi Vaibhav

arrow() ek arrow function hai
Uska this kya hai? — Apne parent, yaani greet() function ka this
Aur greet() method kisne call kiya? → user.greet()
Isiliye this.name → user.name = "Vaibhav"  */

/////////Deep and Shallow Copy /////

/* Shallow Copy:- Sirf ek level tak copy hoti hai. Nested objects ka reference same rehta hai.
Deep Copy:- 	Pure object ke andar ke andar tak copy hoti hai. Har level pe naye reference bante hain. */

