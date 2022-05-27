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

module.exports = {
  greeting,
  color
};
