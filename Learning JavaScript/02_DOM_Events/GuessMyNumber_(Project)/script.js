"usestrict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Changing Text data";
// document.querySelector(".guess").value = 11;
// console.log(document.querySelector(".guess").value);  // read karega jo text box area me hoga
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = secretNumber;

//fucntion to display message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess , typeof guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "⚠️ No Number";
    displayMessage("⚠️ No Number");
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Answer 🎉";
    displayMessage("Correct Answer 🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    highscore = Math.max(highscore, score);
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈Too high!" : "📉Too low!";
      displayMessage(guess > secretNumber ? "📈Too high!" : "📉Too low!");
    } else {
      // document.querySelector(".message").textContent = "🥺You lost the game!";
      displayMessage("🥺You lost the game!");
    }
    score--;
    document.querySelector(".score").textContent = score;
  }

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈Too high!";
  //   } else {
  //     document.querySelector(".message").textContent = "🥺You lost the game!";
  //   }
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉Too low!";
  //   } else {
  //     document.querySelector(".message").textContent = "🥺You lost the game!";
  //   }
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
  