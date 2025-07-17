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
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
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
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = " ";
  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates.at(i),
  }));

  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  combinedMovsDates.forEach(function (obj, i) {
    const { movement, movementDate } = obj;
    const type = movement > 0 ? "deposit" : "withdrawal";

    const date = new Date(movementDate);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0); // beacuse it is zero based
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${movement}€</div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsername = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
  console.log(accounts);
};
createUsername(accounts);

const updateUI = function (currentAccount) {
  //Display movements
  displayMovements(currentAccount);
  //Display balance
  calcDisplayBalance(currentAccount);
  //Display Summary
  calcDisplaySummary(currentAccount);
};
///Event Handler
// Button Login
let currentAccount;
let timer;
btnLogin.addEventListener("click", function (e) {
  //prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value //input username agr match kr rha h apne acc se tho use find krke return kro
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // ?.optional chaining, jab true rhega tab aagye read hoga varna undefined
    //Display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 1;
    //Create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0); // beacuse it is zero based
    const year = now.getFullYear();
    const hours = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hours}:${min}`;
    inputLoginUsername.value = inputLoginPin.value = "";
    if(timer){
      clearInterval(timer);
    };
    timer = setLogOutTimer();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  let receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value //input username agr match kr rha h apne acc se tho use find krke return kro
  );
  const amount = Number(inputTransferAmount.value);
  inputTransferTo.value = inputTransferAmount.value = ""; // issey pehe he data use hojarha h isliye nichey ke cheezey efeect nhi hongey

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
  } else {
    console.log("Invalid entry");
  }
  //reset timer
  clearInterval(timer);
  timer = setLogOutTimer();
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    },3000);
  }
  inputLoanAmount.value = "";
  console.log("Loan completed");
    //reset timer
  clearInterval(timer);
  timer = setLogOutTimer();
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Account Deleted");
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
  labelWelcome.textContent = "Log in to get started";
});
//Sort button
let sorted = false; // stores the state of sort button , so that when clicked again it can go back in previous state,false means print movements as written in ternary operator
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

const setLogOutTimer = function(){
  const tick = function(){
  const min = String(Math.trunc(time/60)).padStart(2,0);
  const sec = String(time%60).padStart(2,0);
  labelTimer.textContent = `${min}:${sec}`;

  //when 0 sec, stop the timer and log out the user
  if(time === 0){
    clearInterval(timer);
        labelWelcome.textContent = "Log in to get started";
    containerApp.style.opacity = 0;
  }
    //decrease 1sec
  time--;
} 
  //Set time to 5min
  let time = 120;
//Call the timer Everu Second // setInterval
tick();
const timer = setInterval(tick,1000);
return timer;
}
/////Fake Always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;

/////////////// Lectures Learning////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function(mov,i,arr){
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

/////Method Chaining
const euroToUsd = 1.1;
const totalDeposits = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
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

// .from() with map and replace
/*
labelBalance.addEventListener("click",function(){
  const labelUi = Array.from(document.querySelectorAll(".movements__value"))
  console.log(labelUi.map(el => el.textContent.replace("€","")));
});
isme humne nodelist select kiya jo ki array tha hi nhi and usko aray banay and uspr baki array ke methods then use kiye
*/
