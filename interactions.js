const character = require('./characters')
const inquirer = require("inquirer");
const ListPrompt = require('inquirer/lib/prompts/list');
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
const gameQuestion = async () => {
  const answer = await inquirer.prompt([{
    name: "userSelection",
    type: 'list',
    message: "rock, paper or scissors?",
    choices: ['rock', 'paper', 'scissors']

  }]).then(answer => {
     console.log(answer.userSelection)
  })
}
module.exports = {
  greeting,
  color, 
  game,
  gameQuestion
};
