const character = require('./characters')
const inquirer = require("inquirer");
const color = () => {
  inquirer
    .prompt([
      {
        name: "color",
        type: "input",
        message: "red, green or blue?",
      },
    ])
    .then((answer) => {
      console.log("hello " + answer.color);
    });
};
const greeting = async () => {
    const answer = await inquirer.prompt({
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
