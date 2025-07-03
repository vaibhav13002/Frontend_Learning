let arr = ["a", "b", "c", "d", "e"]; ///////Tricky//////////
arr = arr.concat([3, 4]); // ✅ returns new array
console.log(`Concat array ${arr}`);
console.log(arr.slice(3).push("z"));
// 📌 Important:
// .push() returns the new length of the array, not the array itself.
// ["d", "e"].push("z") → returns 3
// Array becomes ["d", "e", "z"] — but since it's not stored anywhere, it’s lost.

let names = ["Vaibhav"];
let len = names.push("Mishra");

console.log(len); // 2 ✅
console.log(names); // ["Vaibhav", "Mishra"]
/* ✅ What it does:
Elements ko array ke end me add karta hai
Original array ko hi modify karta hai (not a copy)
Returns: New length of the array */
if (names.push("X") > 5) {
  alert("Too many names!");
}
////////////////////////////////////////////////////////////////////////////////////

console.log(arr);
console.log(arr.splice(3));
console.log(arr);
console.log(arr.slice(3) === arr.splice(3));

let arr1 = [1, 2];
arr1.push(3);
let arr2 = [1, 2];
console.log(arr1);
console.log(arr1 == arr2); // false kyuki memory location check horha h

//== thoda adjust kar leta hai (jaise “chalega yaar”), jabki === bilkul strict hota hai (jaise “exact match chahiye!”)
/* Feature:- == (Loose Equality) ||	=== (Strict Equality)
Type check:-	❌ Nahi karta	|| ✅ Type bhi check karta
Type coercion:-	✅ Yes (convert karke compare karta hai) ||	❌ No (bina convert directly compare karta hai)
Use case:-	Jab tum chahte ho compare ho jaaye type conversion ke sath ||	Jab tum type aur value dono exactly match chahte ho */
/*
5 == "5"     // true  👉 kyunki "5" string ko number me convert kar diya
5 === "5"    // false 👉 types alag hain (number !== string)
0 == false   // true  👉 0 ko boolean me false maan liya
0 === false  // false 👉 number !== boolean
null == undefined   // true  ✅ loosely equal
null === undefined  // false ❌ strictly unequal (type diff)

[1,2] == [1,2]     // false ❌ (dono different memory references)
[1,2] === [1,2]    // false ❌

let a = [1,2];
let b = a;
console.log(a === b);  // true ✅ same reference   */

// Getting last array element
const arr3 = [20, 11, 63, 5];
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-2)[1]); // last 2 element ko slice se nikala and usme bhi 0 and 1 position se 5(postn-1)
console.log(arr3.at(-1));
// At method works on strings also
console.log("Vaibhav".at(0));
console.log("I am a Thor".at(2));

///// for each loop
const deposits = [200, 400, -144, 250, 277, -400];
deposits.forEach(function (dep) {
  if (dep > 0) {
    console.log(`${dep} money is deposited in the Bank `);
  } else {
    console.log(
      `${Math.abs(dep)} amount has been withdrawl from you account
      `
    );
  }
});

///using entries

for (const [i, dep] of deposits.entries()) {
  if (dep > 0) {
    console.log(`Person ${i + 1} has deposited amount ${dep}`);
  } else {
    console.log(`Person ${i + 1} has deposited amount ${dep}`);
  }
}
 /// Using Entries in forEach loop
console.log("=====Entries in forEach loop=====");
 deposits.forEach(function (dep,index,array) {
  if (dep > 0) {
    console.log(`${dep} money is deposited in the Bank by Person ${index + 1}`);
  } else {
    console.log(
      `${Math.abs(dep)} amount has been withdrawl from you account by Person ${
        index + 1
      }`
    );
  }
});

// Yes ✅ Order hamesha yehi hona chahiye:

// function(element, index, array)
//example
 /* let deposits = [100, -50, 300, -10];

deposits.forEach(function (dep, index, array) {
  console.log(`Index ${index}, Value ${dep}, Full Array: ${array}`);
});
// output:
Index 0, Value 100, Full Array: 100,-50,300,-10
Index 1, Value -50, Full Array: 100,-50,300,-10
Index 2, Value 300, Full Array: 100,-50,300,-10
Index 3, Value -10, Full Array: 100,-50,300,-10 */


