"use strict";
// Coding Challenge #2
// Let's continue with our football betting app!

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
let str = "";
let count = 1;
for (const score of game.scored) {
  str += `Goal ${count}: ${score}, `;
  count++;
}
console.log(str);
///2nd solution
for (const [i, scorer] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${scorer}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const { team1, team2, x: draw } = game.odds;
console.log((team1 + team2 + draw) / 3);
///2nd solution
let final = 0;
let len = Object.values(game.odds);
for (const val of Object.values(game.odds)) {
  final += val;
}
console.log(final / len.length);
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
console.log(`Odd of Vistory ${game.team1}:`, team1);
console.log(`Odd of Vistory draw:`, draw);
console.log(`Odd of Vistory ${game.team2}:`, team2);
///2nd solution
let kh = Object.keys(game.odds);
console.log(typeof kh);
console.log(kh); // [ 'team1', 'x', 'team2' ]

for (const [team, odd] of Object.entries(game.odds)) {
  let strtdraw = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${strtdraw} : ${odd}`);
}
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

const scorers = {};

// for (const player of game.scored) {
//   if (scorers[player]) {
//     scorers[player]++;
//   } else {
//     scorers[player] = 1;
//   }
// }

///2nd solution

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
