"use strict";
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const accounts = [account1, account2, account3, account4];
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions
const displayMovements = function (movements) {
  containerMovements.innerHTML = " "; 
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function(movements){
  const balance = movements.reduce((acc,mov) => acc + mov , 0)
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);
 
const calcDisplaySummary = function(movements){
  const income = movements.filter(mov => mov >0).reduce((acc,mov) => acc+mov,0);
  labelSumIn.textContent = `${income}€`;

  const outcome = movements.filter(mov => mov < 0).reduce((acc,mov) => acc+mov,0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = movements.filter(mov => mov >0).map(deposit => (deposit*1.2/100)).filter((int,i,arr) => {
    console.log(arr);
    return int >= 1;
  }).reduce((acc,int) => acc+int,0);
  labelSumInterest.textContent = `${interest}€`
}
calcDisplaySummary(account1.movements);

const createUsername = function(accounts){
  accounts.forEach(function(account){
    account.username = account.owner.toLowerCase().split(" ").map(name => name[0]).join("");
  })
console.log(accounts);
}
createUsername(accounts);



//////Lectures Learning
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function(mov,i,arr){
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

/////Method Chaining
const euroToUsd = 1.1;
const totalDeposits = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc,mov)=> acc+mov,0);
console.log(totalDeposits);

// isme ek dikkat a aaskta h ki agar in between koi method me error aagya jiske vajah se galat final output aarha h tho paa nhi lagega konse step pr error aaya.
// to solve we can do one thing of printing the error which we are getting in each step , as .filter return an array and .map ke parameter me 3 values h(curr,index, array) yaha se array print krlo
/*
const totalDeposits = movements.filter(mov => mov > 0).map((mov,index,arr) =>{
  console.log(arr);
  return mov * euroToUsd
}).reduce((acc,mov)=> acc+mov,0);
console.log(totalDeposits);
*/