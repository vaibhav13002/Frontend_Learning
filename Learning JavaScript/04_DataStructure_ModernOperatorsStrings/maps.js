const mp = new Map();

mp.set("Name", "Vaibhav");
mp.set(1, "France, Italy");
console.log(mp);

mp.set("Categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(mp.get(true));
const time = 21;
console.log(mp.get(time > mp.get("open") && time<mp.get("close")));

const arr = [1,2];
// mp.set([1,2],"test");   // agr key non primitive aise rkhengey to call krty samay undefined dega kyuki o same object nhi hoga jo a hai
mp.set(arr,"test");
console.log(mp.get(arr));

//Even we can store DOM element which is just special objects
mp.set(document.querySelector("h1"),"Heading") // output browser me dikhega
console.log(mp);


// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);