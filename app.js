const character = require("./characters");
const { gameChecker } = require("./funcs");
const { greeting, color, game, gameQuestion } = require("./interactions");

// const leon = new character.Main("leon")
// console.log(leon)
let player;
const start = async () => {
  let name = await greeting();
  console.log(`hello ${name}`);
  let selection = await color(name);
  console.log(selection);
};

const text1 = () => {
  console.log(`hello ${player.name}`);
};

const userQuestion = async () => {
  const question = await gameQuestion();
  let result = gameChecker(question);
  return result;
};
const text2 = () => {
  console.log("text 2 stuff");
};
// start()
userQuestion();
