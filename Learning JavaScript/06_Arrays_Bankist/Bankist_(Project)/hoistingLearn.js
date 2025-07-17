/*Yes, you can use fun3 inside fun1 even if fun3 is defined later in your code, as long as fun3 is a function declaration.

This is because function declarations are hoisted to the top of their scope. This means that JavaScript processes them before executing any other code in that scope. So, even if you write fun3's definition after fun1, JavaScript "knows" about fun3 when fun1 is executed.

Example:

*/

function fun1() {
  console.log("Inside fun1");
  fun3(); // This will work!
}

function fun2() {
  console.log("Inside fun2");
}

function fun3() {
  console.log("Inside fun3");
}

fun1();
// Output:
// Inside fun1
// Inside fun3
/*
Important Note: This applies to function declarations (like function funName() {}). If you define your functions as function expressions (e.g., const fun3 = function() {}; or const fun3 = () => {};), then they are treated more like variables, and you cannot use them before they are defined.
*/