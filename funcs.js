const inquirer = require("inquirer");

const greeting = () => {
    inquirer.prompt(
        {
            type: 'input',
            name: 'character',
            message: 'what is your name',
          }
    )
    .then((answer) => {
        console.log(answer)
        if(answer.character === ""){
            throw error
        }
    })
    .catch((error) => {
        if(error) {
            console.log("oops")
        }
        // greeting()
    })
}

const rand = () => {
    return Math.floor(Math.random() * 2)
}

module.exports = {
    greeting,
    rand
}