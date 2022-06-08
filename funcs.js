const rand = () => {
  return Math.floor(Math.random() * 2);
};
const game = () => {
  let num = Math.floor(Math.random() * 3);
  let option;
  if (num === 0) {
    option = "rock";
  } else if (num === 1) {
    option = "paper";
  } else {
    option = "scissors";
  }
  return option;
};

const gameChecker = (question) => {
  let userValue = question;
  let gameValue = game();
  if (userValue === gameValue) {
    return true;
  } else {
    return false;
  }
};

const inputChecker = (input) => {
  let user = input.trim().toLowerCase();
  let hasNum = /\d/.test(input)
  if (user === "") {
    return "please enter text";
  }else if (hasNum === true) {
    return "contains number";
  }else{
  return user.replace(/[^a-z]/g, "");
  }
};
// const quickFunc = () => {
//   return
// }


module.exports = {
  rand,
  game,
  gameChecker,
  inputChecker,
  quickFunc
};
