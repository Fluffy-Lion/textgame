const character = require('./characters')
const inquirer = require("inquirer");
const color = async (name) => {
   const answer = await inquirer.prompt({
        name: "colorSelection",
        type: "input",
        message: "red, green or blue?",
      },
    )
    return answer.colorSelection
};
const greeting = async () => {
    const answer =  await inquirer.prompt({
      type: "input",
      name: "character",
      message: "what is your name?",
    })
      return answer.character
};
const game = () => {
  let num = Math.floor(Math.random() * 3)
  let option
  if(num === 0){
    option = "rock"
  }else if(num === 1){
    option = "paper"
  }else {
    option = "scissors"
  }
  return option
}
module.exports = {
  greeting,
  color, game
};
